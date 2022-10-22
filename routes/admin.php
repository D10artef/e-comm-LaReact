<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\OfferController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SecurityController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::middleware('guest.admin')->group(function(){
        Route::get('/login', [SecurityController::class, 'login'])->name('admin.login');
        Route::post('/login', [SecurityController::class, 'authenticate'])->name('admin.authenticate');
    });


    Route::middleware('auth.admin')->group(function(){
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::get('/offer', [OfferController::class, 'index'])->name('admin.offer');
        Route::get('/category', [CategoryController::class, 'index'])->name('admin.category');
        Route::get('/products', [ProductController::class, 'index'])->name('admin.product');
        Route::get('/order', [OrderController::class, 'index'])->name('admin.order');
        Route::post('/logout',[SecurityController::class, 'logout'])->name('admin.logout');
    });

    Route::get('/{any}', function(){
        return redirect()->route('admin.login');
    })->where('any', '.*');
    Route::get('/', function () {
        return redirect()->route('admin.login');
    });
});
