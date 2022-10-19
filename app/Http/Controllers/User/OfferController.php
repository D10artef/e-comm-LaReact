<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\OfferCollection;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function allActiveOffer()
    {
        return new OfferCollection(Offer::active()->get());
    }
}
