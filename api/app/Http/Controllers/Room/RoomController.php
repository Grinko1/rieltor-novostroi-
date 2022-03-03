<?php

namespace App\Http\Controllers\Room;

use App\Http\Controllers\Controller;
use App\Models\Room;
use App\Http\Resources\Room\RoomResource;

class RoomController extends Controller
{
    public function index()
    {
        $rooms= Room::with('flats')->get();
        return RoomResource::collection($rooms);
    }
}
