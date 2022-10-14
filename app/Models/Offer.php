<?php

namespace App\Models;

use App\Builders\OfferBuilder;
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

    public function newEloquentBuilder($query)
    {
        return new OfferBuilder($query);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
