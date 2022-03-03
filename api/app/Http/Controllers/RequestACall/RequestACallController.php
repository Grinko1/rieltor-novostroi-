<?php

namespace App\Http\Controllers\RequestACall;

use App\Http\Controllers\Controller;
use App\Models\RequestACall;
use App\Http\Resources\RequestACall\RequestACallResource;
use App\Http\Requests\RequestACall\StoreRequest;


class RequestACallController extends Controller
{
   public function index ()
   {
    $requestACall = RequestACall::get();
    return RequestACallResource::collection($requestACall);
   }

   public function store(StoreRequest $request)
   {
       $data = $request->validated();
       RequestACall::create($data);
       return response([]);

   }
   public function delete( RequestACall $requestACall)
   {
     
       $requestACall->delete();
       return response([]);

   }
}
