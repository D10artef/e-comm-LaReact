<?php

namespace App\Http\Controllers\User;

use App\Http\Resources\ServiceCollection;
use App\Models\Service;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return inertia('Services', [
            'services' => new ServiceCollection($services),
        ]);
    }
}
