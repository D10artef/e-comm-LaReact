<?php

namespace App\Builders;


class OfferBuilder extends BaseBuilder
{

  public function active()
  {
    return $this->where('active', true);
  }

  /**
   * Scope a query to short the result by key (name or active or discount_percent)
   * 
   * @param array $query_request_array
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function orderByKey($query_request_array)
  {
    return $this->when(
      $query_request_array['orderby'] ?? null,
      function () use ($query_request_array) {
        $key = $query_request_array['orderby'];
        if (!in_array($key, ['name', 'active', 'discount_percent', 'created_at'])) {
          $key = 'name';
        }
        $order = 'asc';
        if (array_key_exists('order', $query_request_array)) {
          $order = $query_request_array['order'];
        }
        if (!in_array($order, ['asc', 'desc'])) {
          $order = 'asc';
        }
        return $this->orderBy($key, $order);
      },
      function () {
        return $this->orderBy('name', 'asc');
      }
    );
  }

}