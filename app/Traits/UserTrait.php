<?php 

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

trait UserTrait
{

  public function verifyPassword(Request $request): bool
  {
    if(auth()->check()){
      $user = auth()->user();
      if($request->has('password')){
        return Hash::check($request->get('password'), $user->getAuthPassword());
      }
    }
    return false;
  }

}