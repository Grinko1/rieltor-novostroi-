<?php

namespace App\Http\Controllers\Resale;

use App\Http\Controllers\Controller;
use App\Models\Resale;
use App\Http\Resources\Resale\ResaleResource;

class ResaleController extends Controller
{
    public function index()
    {
        $resales = Resale::with('flats')->get();
        return ResaleResource::collection($resales);
    }
}
