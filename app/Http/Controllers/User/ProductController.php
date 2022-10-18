<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function allProducts()       
    {
       return inertia('Products'); 
    }

    public function showProduct(Product $product)
    {
        return inertia('Product', [
            'product' => new ProductResource($product),
        ]);
    }
}
