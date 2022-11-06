<?php

use App\Http\Controllers\User\CartSessionController as UserCartSessionController;
use App\Http\Controllers\User\OrderController as UserOrderController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {
  // User
  Route::get('/user/profil', [UserController::class, 'index'])->name('user.profil');
  Route::get('/user/setting', [UserController::class, 'showSetting'])->name('user.setting');

  // Cart
  Route::get('/user/cart', [UserCartSessionController::class, 'index'])->name('user.cart');
  Route::delete('/user/cart', [UserCartSessionController::class, 'deleteAllItem'])->name('user.cart.delete');
  Route::post('/user/cart/{product}', [UserCartSessionController::class, 'addItemToCart'])->name('user.cart.add-item');
  Route::put('/user/cart/{cartItem}', [UserCartSessionController::class, 'updateCartItem'])->name('user.cart.update-item');
  Route::delete('/user/cart/{cartItem}', [UserCartSessionController::class, 'removeItemToCart'])->name('user.cart.remove-item');

  // Order
  Route::post('user/order', [UserOrderController::class, 'createOrder'])->name('user.order.create');
});