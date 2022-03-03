<?php

namespace App\Http\Resources\RequestACall;

use Illuminate\Http\Resources\Json\JsonResource;

class RequestACallResource extends JsonResource
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
            'name' =>$this->name,
            'tel' => $this->tel,
            'time_since' => $this->time_since,
            'time_till' => $this->time_till
        ];
    }
}
