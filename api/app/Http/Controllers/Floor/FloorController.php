<?php

namespace App\Http\Controllers\Floor;

use App\Http\Controllers\Controller;
use App\Models\Floor;
use App\Http\Resources\Floor\FloorResource;


class FloorController extends Controller
{
    public function index()
    {
     $floors = Floor::with('flats')->get();

     return FloorResource::collection($floors);
    }
}
