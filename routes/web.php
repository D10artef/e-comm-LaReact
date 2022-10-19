<?php

use App\Http\Controllers\User\CategoryController as UserCategoryController;
use App\Http\Controllers\User\HomeController as UserHomeController;
use App\Http\Controllers\User\ProductController as UserProductController;
use App\Http\Controllers\User\SecurityController as UserSecurityController;
use App\Http\Controllers\User\OfferController as UserOfferController;
use Illuminate\Support\Facades\Route;

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

// Authetification
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [UserSecurityController::class, 'login'])->name('login');
    Route::get('/register', [UserSecurityController::class, 'register'])->name('register');
    Route::get('/password-reset', [UserSecurityController::class, 'passwordReset'])->name('password.reset');
});

// Home
Route::get('/home', [UserHomeController::class, 'index'])->name('home');
Route::get('/', function () {
    return redirect()->route('home');
});


// Products
Route::get('/products', [UserProductController::class, 'index'])->name('products');
Route::get('/products/{product}', [UserProductController::class, 'showProduct'])->name('products.show');

// User UI Categories
Route::get('/categories', [UserCategoryController::class, 'allCategory']);

// User UI Offers
Route::get('/offers', [UserOfferController::class, 'allActiveOffer']);

// Contacts
Route::get('/contacts', function () {
    return inertia('Contacts');
})->name('contacts');

// Service
Route::get('/services', function () {
    return inertia('Services');
})->name('services');