<?php

use App\Http\Controllers\EncurtadorController;
use App\Services\EncurtadorService;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/{slug}', [EncurtadorController::class, 'redirect']);
