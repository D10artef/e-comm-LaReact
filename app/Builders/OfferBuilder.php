<?php

namespace App\Builders;


class OfferBuilder extends BaseBuilder
{

  public function active()
  {
    return $this->where('active', true);
  }


}