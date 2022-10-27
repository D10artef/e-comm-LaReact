<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\OfferRequest;
use App\Http\Resources\BaseCollection;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\OfferResource;
use App\Models\Offer;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Traits\FilePublicTrait;
use Exception;

class OfferController extends Controller
{
    use ImageTrait, FilePublicTrait;

    public function __construct()
    {
        $this->middleware('auth.admin');
    }

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
        $products = $offer->products()->paginate(24);
        
        $offer = Offer::withCount('products')->where('id', $offer->id)->first();
        return inertia('Admin/Offer/Show', [
            'offer' => function() use ($offer){
                return new OfferResource($offer);
            },
            'products' => new BaseCollection($products),
        ]);
    }

    public function create(OfferRequest $offerRequest){
        $validated = $offerRequest->validated();
        if(!is_null($validated['illustration'])){
            $illustration = $validated['illustration'];
            $validated['illustration'] = $this->uploadImage($illustration, 'offers/illustrations');
        }
        try{
            Offer::create($validated);
            return redirect()->route('admin.offer')->with('success', 'Offer created with success');
        }catch(Exception $e){
        }
    }

    public function delete(Offer $offer)
    {   
        $products = $offer->products;
        foreach($products as $product){
            $product->offer()->dissociate();
            $product->save();
        }
        $deleted = $offer->delete();
        if ($deleted) {
            return redirect()->route('admin.offer')->with('success', 'Offer delete with success');
        }
        return back()->withErrors(['deletion_failure' => 'Deletion error']);
    }

    /**
     * Remove products from offer
     *
     * @param Product $product
     * @return void
     */
    public function removeProduct(Offer $offer, Request $request)
    {
        $product = Product::find($request->get('product_id'));
        $product->offer()->dissociate();
        $product->save();
        return back()->with('success', 'Product detach from offer');
    }
}
