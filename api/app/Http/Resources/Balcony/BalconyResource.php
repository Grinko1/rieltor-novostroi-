<?php

namespace App\Http\Resources\Balcony;

use Illuminate\Http\Resources\Json\JsonResource;

class BalconyResource extends JsonResource
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
            'id'=> $this->id,
            'balcony' => $this->balcony
        ];
    }
}
