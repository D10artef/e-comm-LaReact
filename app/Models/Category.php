<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'visible_home',
    ];

    protected $casts = [
        'visible_home' => 'boolean',
    ];

    protected $attributes = [
        'visible_home' => 1,
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
