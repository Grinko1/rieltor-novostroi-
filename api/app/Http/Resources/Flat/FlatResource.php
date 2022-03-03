<?php

namespace App\Http\Resources\Flat;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Balcony\BalconyResource;
use App\Http\Resources\Bathroom\BathroomResource;
use App\Http\Resources\Build\BuildResource;
use App\Http\Resources\Decoration\DecorationResource;
use App\Http\Resources\Facade\FacadeResource;
use App\Http\Resources\Floor\FloorResource;
use App\Http\Resources\Resale\ResaleResource;
use App\Http\Resources\Room\RoomResource;
use App\Http\Resources\Image\ImageResource;

class FlatResource extends JsonResource
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
            'title' => $this->title,
            'area' =>$this->area,
            'desc' => $this->desc,
            'imageUrl' => $this->imageUrl,
            'square' => $this->square,
            'kitchenSquare'=>$this->kitchenSquare,
            'price'=>$this->price,
            'total_floors' =>$this->total_floors,
            'minprice'=>$this->minprice,
            'maxprice'=>$this->maxprice,
            'lift' =>$this->lift,
            'adress' => $this->adress,
            'city' => $this->city,
            'coordinate' => $this->coordinate,
            'yearOfBuild' =>$this->yearOfBuild,
            'balcony' => new BalconyResource($this->balcony),
            'bathroom' =>new BathroomResource($this->bathroom),
            'build' =>new BuildResource($this->build),
            'decoration' =>new DecorationResource($this->decoration),
            'facade' =>new FacadeResource($this->facade),
            'floor' =>new FloorResource($this->floor),
            'resale' =>new ResaleResource($this->resale),
            'room' =>new RoomResource($this->room),
            'images' =>  ImageResource::collection($this->images)
            // 'images' => new ImageResource($this->images)
        ];
    }
}
