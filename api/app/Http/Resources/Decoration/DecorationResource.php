<?php

namespace App\Http\Resources\Decoration;

use Illuminate\Http\Resources\Json\JsonResource;

class DecorationResource extends JsonResource
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
            'decoration' => $this->decoration
        ];
    }
}
