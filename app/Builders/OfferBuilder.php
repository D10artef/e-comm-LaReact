<?php

namespace App\Builders;

use Illuminate\Database\Eloquent\Builder;

class OfferBuilder extends Builder
{

  public function active()
  {
    return $this->where('active', true);
  }
}