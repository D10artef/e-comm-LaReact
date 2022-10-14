<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\ProductCollection;
use App\Models\Category;
use App\Models\Offer;
use App\Models\Product;

class HomeController extends Controller
{
    public function index()
    {
        // Get all active offers
        $active_offers = Offer::active()->get();

        // Get latest product by Category
        $categories = Category::whereHas('products')
        ->where('visible_home', 1)
        ->get()
            ->map(function ($category) {
                $category->setRelation(
                    'products',
                    new ProductCollection(Product::with('offer:id,discount_percent,active')->where('category_id', $category->id)->latest()->limit(8)->get())
                );
                return $category;
            });

        return inertia('Home', 
        [
            'active_offers' => new OfferCollection($active_offers),
            'categories' => new CategoryCollection($categories),
        ]
        );
    }
}
