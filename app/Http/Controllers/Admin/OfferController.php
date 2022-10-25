<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\BaseCollection;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\OfferResource;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function index(Request $request)
    {
        $offres = Offer::orderByKey($request->only('orderby', 'order'))
                ->filter($request->only('search'))
                ->paginate(15)
                ->appends($request->all());
        return inertia('Admin/Offer/Index', [
            'offers' => function () use ($offres) {
                return new OfferCollection($offres);
            }
        ]);
    }

    public function show(Offer $offer)
    {
        $products = $offer->products()->paginate(12);
        return inertia('Admin/Offer/Show', [
            'offer' => function() use ($offer){
                return new OfferResource($offer);
            },
            'products' => new BaseCollection($products),
        ]);
    }

    public function delete(Offer $offer)
    {
        $deleted = $offer->delete();
        if ($deleted) {
            return redirect()->route('admin.offer')->with('success', 'Offer delete with success');
        }
        return back()->withErrors(['deletion_failure' => 'Deletion error']);
    }
}
