<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OfferCollection;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function index(Request $request)
    {
        $offres = Offer::orderByKey($request->only('orderby', 'order'))
                ->filter($request->only('search'))
                ->paginate(12);
        return inertia('Admin/Offer/Index', [
            'offers' => function () use ($offres) {
                return new OfferCollection($offres);
            }
        ]);
    }
}
