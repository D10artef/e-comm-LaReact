<?php

use App\Http\Controllers\Admin\SecurityController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::middleware('guest.admin')->group(function(){
        Route::get('/login', [SecurityController::class, 'login'])->name('admin.login');
        Route::post('/login', [SecurityController::class, 'authenticate'])->name('admin.authenticate');
    });


    Route::middleware('auth.admin')->group(function(){
        Route::get('/dashboard', [SecurityController::class, 'dashboard'])->name('admin.dashboard');
        Route::post('/logout',[SecurityController::class, 'logout'])->name('admin.logout');
    });

    Route::get('/{any}', function(){
        return redirect()->route('admin.login');
    })->where('any', '.*');
    Route::get('/', function () {
        return redirect()->route('admin.login');
    });
});
