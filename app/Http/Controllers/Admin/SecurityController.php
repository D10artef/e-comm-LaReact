<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class SecurityController extends Controller
{
    

    public function login()
    {
        return inertia('Admin/Login');
    }

    public function authenticate(Request $request)
    {
        $credential = $request->only(['username', 'password']);
        if ($request->has('remember'))
            $remember = $request->get('remember');
        $admin = Admin::where('username', $request->get('username'))->first();

        if(is_null($admin)){
            $error = ['username' => 'Username not found'];
            return back()->withErrors($error);
        }
        
        if(Auth::guard('admin')->attempt($credential, $remember)){
            return Redirect::route('admin.dashboard');
        }
        else{
            $error = ['password' => 'Error in your password'];
            return back()->withErrors($error);
        }
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
    }
}
