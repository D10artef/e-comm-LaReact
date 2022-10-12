<?php

use App\Http\Controllers\SecurityController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware(['guest'])->group(function () {
    Route::get('login', [SecurityController::class, 'login'])->name('login');
    Route::get('register', [SecurityController::class, 'register'])->name('register');
    Route::get('password-reset', [SecurityController::class, 'passwordReset'])->name('password.reset');
});

// Home
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/', function () {
    return redirect()->route('home');
});

