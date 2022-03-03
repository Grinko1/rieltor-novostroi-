<?php

namespace App\Http\Controllers\Flat;

use App\Http\Controllers\Controller;
use App\Models\Flat;
use App\Models\Image;
use App\Http\Requests\Flat\StoreRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class StoreController extends Controller
{
   public function __invoke(Request $request)
   {
      $request->validate([
         'title' =>'string',
         'area' =>'string',
         'desc' => 'string',
         'adress' => 'string',
         'coordinate' => 'string',
         'files'=>'nullable|',
         'square' => 'string',
         'kitchenSquare'=>'string',
         'price'=>'integer',
         'total_floors' =>'integer',
         'lift' =>'string',
         'city' => 'string',
         'yearOfBuild' =>'integer',
         'balcony_id' =>'exists:balconies,id',
         'bathroom_id' =>'exists:bathrooms,id',
         'build_id' =>'exists:builds,id',
         'decoration_id' =>'exists:decorations,id',
         'facade_id' =>'exists:facades,id',
         'floor_id' =>'exists:floors,id',
         'resale_id' =>'exists:resales,id',
         'room_id' =>'exists:rooms,id',
         'files' => 'array|nullable' 
      ]);
      $data =$request->all();
  
            unset($data['files']);
           
            $flat = Flat::create([
             
               'title' => $data['title'],
               'area' => $data['area'],
               'adress' => $data['adress'],
               'coordinate' => $data['coordinate'],
               'desc' => $data['desc'],
               'square' => $data['square'],
               'kitchenSquare' => $data['kitchenSquare'],
               'price' => $data['price'],
               'city' => $data['city'],
               'total_floors'=> $data['total_floors'],
               'lift' => $data['lift'],
               'yearOfBuild' => $data['yearOfBuild'],
               'balcony_id' => $data['balcony_id'],
               'bathroom_id' => $data['bathroom_id'],
               'build_id' => $data['build_id'],
               'decoration_id' => $data['decoration_id'],
               'facade_id' => $data['facade_id'],
               'floor_id' => $data['floor_id'],
               'resale_id' => $data['resale_id'],
               'room_id' => $data['room_id'],

         ], [$data]);

            



            if ($request->hasFile('files') ) {
          
               foreach ( $request->file('files')  as $image ) {
     
               $filename = $image->getClientOriginalName();
               $finalname = date('His') . $filename ;
               // $previewName = 'prev_' . $filename;
               $filePath =  $image->storeAs('images/', $finalname , 'public');

              
             
               Image::create([
                   'path' => $filePath,
                   'url' => url('/storage/' . $filePath),
                    'flat_id' => $flat->id
                               ]);
               } 
             
           } 
           else{
              
               return response()->json(['message' => 'failure']);
           }
















      ///old
      // $data = $request->validated();
      // $images = $data['images'];
      // dd($data);
      // unset($data['images']);
      // $flat = Flat::create($data);

      // foreach ( $data['images'] as $image) {
      //    // dd($images);
      //    $name = md5(Carbon::now() . '-' . $image->getClientOriginalName()) . '.' . $image->getClientOriginalExtension();
      //    $filePath = Storage::disk('public')->putFileAs('/images', $image, $name);
      //    $previewName = 'prev_' . $name;
      //    Image::create([
      //        'path' => $filePath,
      //        'url' => url('/storage/' . $filePath),
      //        'preview_url' =>url('/storage/images/' . $previewName),
      //        'flat_id' => $flat->id
      //    ]);
      //  Image::make($image)->fit(100, 100 )->save(storage_path('app/public/images/' . $previewName));
      // }

      return response(['json' => 'success']);
   }

}
