<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

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
