<?php

namespace App\Http\Controllers\Flat;

use App\Http\Controllers\Controller;
use App\Models\Flat;

class ShowController extends Controller
{
   public function __invoke(Flat $flat)
   {
      return $flat->load('room','floor', 'build', 'balcony', 'bathroom', 'decoration','resale', 'facade', 'images');
   }

}
