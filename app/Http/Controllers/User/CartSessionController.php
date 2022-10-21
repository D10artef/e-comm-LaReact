<?php

namespace App\Http\Controllers\User;

use App\Actions\SimpleService\CartSessionService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\CartSessionResource;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;

class CartSessionController extends Controller
{   

    public function index()
    {
        if(auth()->check()){
            // $cart_service = new CartSessionService(auth()->user());
            $cart_session = CartSessionService::getOrCreateSession(auth()->user());
            return inertia('Cart', [
                'user_session' => new CartSessionResource($cart_session),
            ]);
        }
        Redirect::route('login', null, 301);
    }

    public function addItemToCart(Product $product)
    {
        $this->returnIfNotConnected();
        $user = auth()->user();
        $cart_session = CartSessionService::getOrCreateSession($user);
        $item = $cart_session->getItemIfExist($product->id);
        if(is_null($item)){
            $cart_session = $cart_session->addNewCartItem($product);
        }else{
            $cart_session = $cart_session->addOneCartItem($item, $product);
        }
        return response()->json([
            'message' => 'Add succesfuly',
            'data' => new CartSessionResource($cart_session->refresh()),
        ], 201);
    }

    public function updateCartItem(CartItem $cartItem, Request $request)
    {
        $this->returnIfNotConnected();
        $operation = $request->get('operation');
        $cart_session = CartSessionService::getOrCreateSession(auth()->user());
        if($operation === config('constants.operations.add')){
            $cart_session->addOneCartItem($cartItem, $cartItem->product);
        }else if($operation === config('constants.operations.minus')){
            $cart_session->minusOneCartItem($cartItem, $cartItem->product);
        }
        return response()->json([
            'message' => 'Update succesfuly',
            'data' => new CartSessionResource($cart_session->refresh()),
        ], 201);
    }


    public function removeItemToCart(CartItem $cartItem)
    {
        $this->returnIfNotConnected();
        $cart_session = CartSessionService::getOrCreateSession(auth()->user());
        $cart_session->deleteCartItem($cartItem);
        return response()->json([
            'message' => 'Remove succesfuly',
            'data' => new CartSessionResource($cart_session->refresh()),
        ], 201);
    }

    public function deleteAllItem()
    {
        $this->returnIfNotConnected();
        $cart_session = CartSessionService::getOrCreateSession(auth()->user());
        $cart_session->deleteAllItem();
        return response()->json([
            'message' => 'All items are deleted succesfuly',
            'data' => new CartSessionResource($cart_session->refresh()),
        ], 201);
    }

    private function returnIfNotConnected()
    {
        if(!auth()->check()){
            return response()->json(['message' => 'You are not authemticated'], 401);
        }
    }
}
