<?php

namespace App\Http\Controllers\Bathroom;

use App\Http\Controllers\Controller;
use App\Models\Bathroom;
use App\Http\Resources\Bathroom\BathroomResource;

class BathroomController extends Controller
{
    public function index()
    {
        $bathrooms= Bathroom::with('flats')->get();

        return  BathroomResource::collection($bathrooms);
    }
}
