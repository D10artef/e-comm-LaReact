<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'active',
        'illustration',
        'discount_percent'
    ];

    protected $attributes = [
        'active' => false,
        'discount_percent' => 0,
    ];

    protected $casts = [
        'active' => 'boolean'
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function scopeActive($query)
    {
        $query->where('active', 1);
    }
}
