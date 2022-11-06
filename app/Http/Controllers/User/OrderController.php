<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\UserTrait;

class OrderController extends Controller
{
    use UserTrait;

    public function createOrder(Request $request)
    {
        $is_verified = $this->verifyPassword($request);
        if($is_verified){
            $user = auth()->user();
            $cartSession = $user->cartSession()->with('cartItems')->get();
            dd($cartSession);
            return back()->with('success', 'User verified');
        }
        return back()->withErrors(['password' => "Password doesn't match"]);
    }
}
