<?php

namespace App\Http\Resources\Image;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Flat\FlatResource;

class ImageResource extends JsonResource
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
            'path' => $this->path,
            'url' => $this->url,
            'flat_id'=>$this->flat_id
            // 'flat' => new FlatResource($this->images)
        ];
    }
}
