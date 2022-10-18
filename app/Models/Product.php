<?php

namespace App\Models;

use App\Builders\ProductBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
    ];

    public function newEloquentBuilder($query)
    {
        return new ProductBuilder($query);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }

    public function cartItem()
    {
        return $this->hasOne(CartItem::class);
    }

    public function avaible()
    {
        return $this->quantity > 0;
    }
    
}
