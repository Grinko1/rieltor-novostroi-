<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\StoreRequest;

class UserController extends Controller
{
  public function index() 
  {

  }
  public function store(StoreRequest $request)
  {
      $data = $request->validated();
      dd($data);
  }
}
