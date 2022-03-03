<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::group(['middleware' => 'auth:sanctum'], function () {
//     Route::get('/get', 'GetController');
// });
//  Route::get('/get', 'GetController');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group(['namespace' => 'Flat', 'prefix' => 'flats'], function () {
    Route::get('/', 'IndexController');
    Route::post('/', 'StoreController');
    Route::get('/{flat}', 'ShowController');
    Route::post('/{flat}', 'UpdateController');
    Route::delete('/{flat}', 'DeleteController');
});

Route::group(['namespace' => 'User', 'prefix' => 'user'], function () {
    Route::post('/login', 'UserController@store');
});

Route::group(['namespace' => 'Balcony', 'prefix' => 'balconies'], function () {
    Route::get('/', 'BalconyController@index');
});
Route::group(['namespace' => 'Bathroom', 'prefix' => 'bathrooms'], function () {
    Route::get('/', 'BathroomController@index');
});
Route::group(['namespace' => 'Build', 'prefix' => 'builds'], function () {
    Route::get('/', 'BuildController@index');
});
Route::group(['namespace' => 'Decoration', 'prefix' => 'decorations'], function () {
    Route::get('/', 'DecorationController@index');
});
Route::group(['namespace' => 'Facade', 'prefix' => 'facades'], function () {
    Route::get('/', 'FacedeController@index');
});
Route::group(['namespace' => 'Floor', 'prefix' => 'floors'], function () {
    Route::get('/', 'FloorController@index');
});
Route::group(['namespace' => 'Resale', 'prefix' => 'resales'], function () {
    Route::get('/', 'ResaleController@index');
});
Route::group(['namespace' => 'Room', 'prefix' => 'rooms'], function () {
    Route::get('/', 'RoomController@index');
});
Route::group(['namespace' => 'RequestACall', 'prefix' => 'applications'], function () {
    Route::get('/', 'RequestACallController@index');
    Route::post('/', 'RequestACallController@store');
    Route::delete('/{requestACall}', 'RequestACallController@delete');
});

Route::group(['namespace' => 'Image', 'prefix' => 'images'], function () {
    Route::delete('/{image}', 'ImageController@delete');
});
