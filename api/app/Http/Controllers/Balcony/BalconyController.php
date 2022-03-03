<?php

namespace App\Http\Controllers\Balcony;

use App\Http\Controllers\Controller;
use App\Models\Balcony;
use App\Http\Resources\Balcony\BalconyResource;

class BalconyController extends Controller
{
   public function index()
   {
       $balconies = Balcony::with('flats')->get();

       return BalconyResource::collection($balconies);

   }
}
