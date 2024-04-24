<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BuyController;
use App\Http\Controllers\SellController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;


Route::get('/', function (Request $request){
    return response()->json(['success' => true, 'msg' => "Hello world!"]);
});

Route::post('/users', [UserController::class, 'create']);

Route::get('/users/{id}', function(Request $request, $id){

    return response()->json(['success' => true, 'msg' => "Você mandou o user {$id}!"]);
});

Route::get('/users/marcelo/cache', function(Request $request){
    $user = json_decode(Cache::get('user'));

    dd($user->name);
});


Route::resource('/products', ProductController::class)
    ->except(['show', 'update', 'destroy', 'store']);

Route::post('/products', [ProductController::class, 'store'])
    ->middleware('exist.category');

Route::middleware('exist.product')->group(function() {
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
});

Route::resource('/categories', CategoryController::class)
->except(['show', 'update', 'destroy']);

Route::middleware('exist.category')->group(function() {
    Route::get('/categories/{id}', [CategoryController::class, 'show']);
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
});

Route::resource('/buy',  BuyController::class);

Route::resource('/sell',  SellController::class);

