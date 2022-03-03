<?php

namespace App\Http\Resources\Resale;

use Illuminate\Http\Resources\Json\JsonResource;

class ResaleResource extends JsonResource
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
            'resale' => $this->resale
        ];
    }
}
