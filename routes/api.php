<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExchangeRateController;
use App\Http\Controllers\LoginController;

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

Route::middleware('auth:sanctum')->group(function () {
    /**
     * Wrap api requests in here to authenticate from the frontend.
     * https://laravel.com/docs/9.x/sanctum#protecting-spa-routes
     */
    Route::prefix('exchange')->group(function () {
        Route::get('/', [ExchangeRateController::class, 'index']);
        Route::get('/basecharacters', [ExchangeRateController::class, 'getBaseCharacters']);
        Route::get('/symbols', [ExchangeRateController::class, 'getSymbols']);
    });
    Route::prefix('user')->group(function () {
        Route::get('/login', [LoginController::class, 'create'])
            ->name('login');
    });
});

