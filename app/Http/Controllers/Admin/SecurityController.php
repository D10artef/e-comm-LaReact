<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        if(Auth::guard('admin')->attempt($credential)){
            return Redirect::route('admin.dashboard');
        }
    }

    public function dashboard()
    {
        return inertia('Admin/Dashboard', [
            
        ]);
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
    }
}
