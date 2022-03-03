<?php

namespace App\Http\Controllers\Flat;

use App\Http\Controllers\Controller;
use App\Models\Flat;
use App\Models\Room;
use App\Http\Requests\Flat\FilterRequest;
use App\Http\Resources\Flat\FlatResource;

class IndexController extends Controller
{
   public function __invoke(FilterRequest $request)
   {
      $data = $request->validated();
      // dd($data);
  
      $query = Flat::query();

      if(isset($data['room_id'])){
         $query->where('room_id', $data['room_id']);
      }
      if(isset($data['resale_id'])){
         $query->where('resale_id', $data['resale_id']);
      }
      if(isset($data['build_id'])){
         $query->where('build_id', $data['build_id']);
      }
      if (isset($data['area'])) {
         $query->where('area', 'like', "%{$data['area']}%");
     }
         if(isset($data['price_from'], $data['price_to']) ) {
      $query->whereBetween('price', [$data['price_from'], $data['price_to']] );
   }
   if(isset($data['price_from'])) {
      $query->where('price', '>=', $data['price_from'] );
   }

   if(isset($data['price_to'])) {
      $query->where('price', '<=', $data['price_to'] );
   }

   if(isset($data['desc'])) {
      $query->where->orderByDesc('price')->all();
   }

   // if(isset($data['minprice'])){
   //    $query->where('price',  '>', $data['minprice'] );
   // }
   // if(isset($data['maxprice'])){
   //    $query->whereBetween('price',  '<',$data['maxprice'] );
   // }
   
      $flats = $query->get();

    
      
    
   //  return Flat::with('room','floor', 'build', 'balcony', 'bathroom', 'decoration','resale', 'facade')->get();
   return FlatResource::collection($flats);
   // return $flats;
   }

}
