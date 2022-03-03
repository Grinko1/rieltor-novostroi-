<?php

namespace App\Http\Controllers\Flat;

use App\Http\Controllers\Controller;
use App\Models\Flat;
use App\Models\Image;


class DeleteController extends Controller
{
   public function __invoke(Flat $flat)
   {

      Image::where(['flat_id' => $flat->id])->delete();


      $flat->delete();
      return response([]);
   }
}
