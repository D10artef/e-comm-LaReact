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
}