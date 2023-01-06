<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExchangeRateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $user = null;
        if ($this->user) {
            $user = $this->user;
        }
        return [
            'user' => $user,
            'amount' => $this->amount,
            'to_conversion' => $this->to_conversion,
            'conversion_percentage' => $this->conversion_percentage,
            'conversion' => $this->conversion,
            'from' => $this->from,
            'to' => $this->to,
        ];
    }
}
