<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('{page}', 'IndexController')->where('page', '.*');
// Route::get('/', 'IndexController');

// Route::group(['namespace' => 'Product', 'prefix'=>'products'], function (){
//     Route::get('/', 'ProductController@index');
//     Route::post('/', 'ProductController@store');
// });
// Route::get('/', 'IndexController');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
