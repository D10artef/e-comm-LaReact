<?php

use App\Http\Controllers\User\CartSessionController as UserCartSessionController;
use App\Http\Controllers\User\ServiceController as UserServiceController;
use App\Http\Controllers\User\CategoryController as UserCategoryController;
use App\Http\Controllers\User\HomeController as UserHomeController;
use App\Http\Controllers\User\ProductController as UserProductController;
use App\Http\Controllers\User\SecurityController as UserSecurityController;
use App\Http\Controllers\User\OfferController as UserOfferController;
use App\Http\Controllers\User\UserController;
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

// Service
Route::get('/services', [UserServiceController::class, 'index'])->name('services');

// User
Route::middleware(['auth'])->group(function () {
    Route::get('/user/profil', [UserController::class, 'index'])->name('user.profil');
    Route::get('/user/setting', [UserController::class, 'showSetting'])->name('user.setting');
});

// Cart 
Route::middleware(['auth'])->group(function () {
    Route::get('/user/cart', [UserCartSessionController::class, 'index'])->name('user.cart');
    Route::delete('/user/cart', [UserCartSessionController::class, 'deleteAllItem'])->name('user.cart.delete');
    Route::post('/user/cart/{product}', [UserCartSessionController::class, 'addItemToCart'])->name('user.cart.add-item');
    Route::put('/user/cart/{cartItem}', [UserCartSessionController::class, 'updateCartItem'])->name('user.cart.update-item');
    Route::delete('/user/cart/{cartItem}', [UserCartSessionController::class, 'removeItemToCart'])->name('user.cart.remove-item');
});





// User UI Categories
Route::get('/categories', [UserCategoryController::class, 'allCategory']);

// User UI Offers
Route::get('/offers', [UserOfferController::class, 'allActiveOffer']);

// Contacts
Route::get('/contacts', function () {
    return inertia('Contacts');
})->name('contacts');