<?php

namespace App\Http\Controllers\Decoration;

use App\Http\Controllers\Controller;
use App\Models\Decoration;
use App\Http\Resources\Decoration\DecorationResource;

class DecorationController extends Controller
{
   public function index()
   {
       $decorations = Decoration::with('flats')->get();

       return DecorationResource::collection($decorations);
   }
}
