<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\BaseCollection;
use App\Models\Category;

class CategoryController extends Controller
{
    public function allCategory()
    {
        return new BaseCollection(Category::where('parent_id', 0)->get());
    }
}
