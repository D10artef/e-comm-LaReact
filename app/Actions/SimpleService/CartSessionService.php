<?php
namespace App\Actions\SimpleService;

use App\Models\CartItem;
use App\Models\CartSession;
use App\Models\Product;
use App\Models\User;

class CartSessionService
{
  private static $cart_session;

  public static function getOrCreateSession(User $user)
  {
    self::$cart_session = $user->cartSession;
    if(is_null(self::$cart_session)){
      self::$cart_session = new CartSession();
      $user->cartSession()->save(self::$cart_session);
    }
    return self::$cart_session;
  }



  // public function __construct(User $user)
  // {
  //   $this->user = $user;
  //   $this->cart_session = self::getOrCreateSession($user);
  // }

  // public function getCartSession()
  // {
  //   return $this->cart_session;
  // }

  // public function getUser()
  // {
  //   return $this->user;
  // }

  // public function addCartItem(Product $product)
  // {
  //   $item = $this->cart_session->getItemIfExist($product->id);
  //   if(is_null($item)){
  //     $this->cart_session->addNewCartItem($product);
  //   }else{
  //     $this->cart_session->updateCartItem($item, $product);
  //   }
  //   return $this->cart_session->refresh();
  // }

  // public function deleteCartItem(CartItem $item)
  // {
    
  // }

}