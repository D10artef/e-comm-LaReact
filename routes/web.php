<?php

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

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('login', function() {
    return inertia('Auth/Login');
})->name('login');
Route::get('register', function () {
    return inertia('Auth/Register');
})->name('register');
Route::get('password_reset', function() {
    return inertia('Auth/ResetPassword');
})->name('password.reset');
