<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserPaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'account' => $this->account,
            'provider' => new PaymentProviderResource($this->whenLoaded('paymentProvider')),
            // 'provider_name' => $this->getProviderName(),
            // 'provider_type' => $this->getProviderType(),
        ];
    }
}
