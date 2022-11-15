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
        'illustration',
        'slug',
    ];

    protected $casts = [
        'price' => 'float',
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

    public function getActivePrice()
    {
        $offer = $this->offer;
        if($offer && $offer->active){
            $discount = $offer->discount_percent;
            return round($this->price  * (100 - $discount) / 100, 2);
        }
        return $this->price;
    }
    
}
