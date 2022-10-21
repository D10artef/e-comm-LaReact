<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class CartSession extends Model
{
    use HasFactory;

    protected $fillable = [
        'total',
    ];

    protected $with = [
        'cartItems',
    ];

    protected $attributes = [
        'total' => 0,
    ];

    protected $casts = [
        'total' => 'float',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function totalItems()
    {
        return $this->cartItems()->sum('quantity');
    }


    public function getItemIfExist($product_id)
    {
        return $this->cartItems()->whereHas('product', function(Builder $builder) use ($product_id){
            $builder->where('id', $product_id);
        })->first();
    }

    public function addNewCartItem(Product $product)
    {
        $item = new CartItem();
        $item->product()->associate($product);
        $result = $this->cartItems()->save($item);
        $this->total = $this->total + $product->price;
        if($result) $this->save();
        return $this;
    }

    public function addOneCartItem(CartItem $item, Product $product)
    {
        if($product->quantity > $item->quantity){
            $item->quantity++;
            $result = $item->save();
            $this->total = $this->total + $product->price;
            if($result) $this->save();
        }
        return $this;
    }

    public function minusOneCartItem(CartItem $item, Product $product)
    {
        if($item->quantity > 0) {
            $item->quantity--;
            $result = $item->save();
            $this->total = $this->total - $product->price;
            if($item->quantity === 0){
                $result = $item->delete();
            }
        }
        if($result) $this->save();
        return $this;
    }

    public function deleteCartItem(CartItem $item)
    {
        $valueTominus = $item->quantity * $item->product->price;
        $newTotal = $this->total - $valueTominus;
        $result = $item->delete();
        if($result) $this->update(['total' => $newTotal]);
        return $this;
    }

    public function deleteAllItem()
    {
        $this->update(['total' => 0]);
        return $this->cartItems()->delete();
    }

}
