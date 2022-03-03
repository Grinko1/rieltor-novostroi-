<?php

namespace App\Http\Controllers\Facade;

use App\Http\Controllers\Controller;
use App\Models\Facade;
use App\Http\Resources\Facade\FacadeResource;

class FacedeController extends Controller
{
    public function index()
    {
        $facades = Facade::with('flats')->get();
        return FacadeResource::collection($facades);
    }
}
