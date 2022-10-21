<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
    ];

    protected $attributes = [
        'quantity' => 1,
    ];

    protected $casts = [
        'quantity' => 'integer',
    ];

    protected $with = [
        'product',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function cartSession()
    {
        return $this->belongsTo(CartSession::class);
    }
}
