<?php

namespace App\Repository\Interfaces;

interface CartItemRepositoryInterface
{
  public function getAllCartItems();
  public function getCartItemById($itemId);
  public function deleteCartItem($itemId);
  public function createCartitem();
}