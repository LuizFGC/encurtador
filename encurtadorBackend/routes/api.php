<?php

use App\Http\Controllers\EncurtadorController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/encurta', [EncurtadorController::class, 'store']);

Route::post('/registro', [UserController::class, 'store']);

Route::post('/login', [UserController::class, 'login']);
