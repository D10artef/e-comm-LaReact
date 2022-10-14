<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SecurityController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login');
    }

    public function register()
    {
        return inertia('Auth/Register');
    }

    public function passwordReset()
    {
        return inertia('Auth/ResetPassword');
    }
}
