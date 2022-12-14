<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'visible_home' => $this->visible_home,
            // 'products' =>  new ProductCollection($this->products)
            'products' => new ProductCollection($this->whenLoaded('products')),
            'products_count' => $this->products->count(),
        ];
    }
}
