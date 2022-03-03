<?php

namespace App\Http\Controllers\Build;

use App\Http\Controllers\Controller;
use App\Models\Build;
use App\Http\Resources\Build\BuildResource;

class BuildController extends Controller
{
  public function index()
  {
    $builds = Build::with('flats')->get();
    return BuildResource::collection($builds);
  }
}
