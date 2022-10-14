<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\OfferCollection;
use App\Models\Offer;


class HomeController extends Controller
{
    public function index()
    {
        // Get all active offers
        $active_offers = Offer::active()->get();


        return inertia('Home', 
        compact('active_offers')
        // [
        //     'active_offers' => new OfferCollection($active_offers),
        // ]
        );
    }
}
