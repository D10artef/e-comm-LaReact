<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\BaseCollection;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Offer;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)       
    {
        $products = Product::with('offer:id,discount_percent,active')
                    ->orderByKey($request->only('orderby', 'order'));

        if ($request->has('category')) {
            $products = $products->where('category_id', $request->get('category'));
        }
        if ($request->has('offer')) {
            $products = $products->where('offer_id', $request->get('offer'));
        }

        $products = $products->maxPrice($request->only('max'))
            ->minPrice($request->only('min'))
            ->filter($request->only('search'))
            ->paginate(12)
            ->appends($request->all());
        
        return inertia('Products', [
            'products' => function() use ($products){
                return new ProductCollection($products);
            },
            'categories' => function () {
                return new BaseCollection(Category::has('products')->where('parent_id', '=', 0)->get());
            },
            'offers' => function () {
                return new OfferCollection(Offer::has('products')->active()->get());
            },
        ]); 
    }

    public function showProduct(Product $product)
    {
        return inertia('Product', [
            'product' => new ProductResource($product),
            'categories' => function () {
                return new BaseCollection(Category::has('products')->where('parent_id', '=', 0)->get());
            },
            'offers' => function () {
                return new OfferCollection(Offer::has('products')->active()->get());
            },
        ]);
    }

}
