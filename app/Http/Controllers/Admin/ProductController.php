<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = Product::without('offer')
            ->orderByKey($request->only('orderby', 'order'))
            ->filter($request->only('search'))
            ->paginate(12);
        return inertia('Admin/Product/Index', [
            'products' => function() use ($products){
                return $products;
            }
        ]);
    }
}
