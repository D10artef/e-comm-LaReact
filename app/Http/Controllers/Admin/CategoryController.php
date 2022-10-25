<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\BaseCollection;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::orderByKey($request->only('orderby', 'order'))
            ->filter($request->only('search'))
            ->paginate(15)
            ->appends($request->all());
        return inertia('Admin/Category/Index', [
            'categories' => function () use ($categories){
                return new CategoryCollection($categories);
            }
        ]);
        
    }

    public function show(Category $category){
        $products = $category->products()->paginate(12);
        return inertia('Admin/Category/Show', [
            'category' => function () use ($category) {
                return new CategoryResource($category);
            },
            'products' => new BaseCollection($products),
        ]);
    }

    public function delete(Category $category)
    {
        $deleted = $category->delete();
        if ($deleted) {
            return redirect()->route('admin.category')->with('success', 'Category delete with success');
        }
        return back()->withErrors(['deletion_failure' => 'Deletion error']);
    }
}
