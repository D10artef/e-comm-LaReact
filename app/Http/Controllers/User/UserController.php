<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserInfoResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $userInfo = auth()->user()->userInfo;
        return inertia('User/Profil', [
            'user_info' => new UserInfoResource($userInfo),
        ]);
    }

    public function showSetting()
    {
        return inertia('User/Setting');
    }
}
