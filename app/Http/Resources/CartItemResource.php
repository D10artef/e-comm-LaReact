<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'quantity' => $this->quantity,
            'product_name' => $this->product->name,
            'product_price' => $this->product->price,
            'product_id' => $this->product->id,
            'product_illustration' => $this->product->illustration,
            'product_active_price' => $this->product->getActivePrice(),
        ];
    }
}
