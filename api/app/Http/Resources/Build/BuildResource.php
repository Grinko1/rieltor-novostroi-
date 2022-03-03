<?php

namespace App\Http\Resources\Build;

use Illuminate\Http\Resources\Json\JsonResource;

class BuildResource extends JsonResource
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
            'build' => $this->build,
            'for_search' => $this->for_search
        ];
    }
}
