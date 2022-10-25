<?php

namespace App\Builders;


class ProductBuilder extends BaseBuilder
{
  /**
   * Scope query to include only product in stock
   *
   * @return Builder
   */
  public function inStock()
  {
    return $this->where('quantity', '>', 0);
  }


  /**
   * Scope a query to only product with maxprice
   * 
   * @param array $array_request
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function maxPrice($array_request)
  {
    return $this->when($array_request['max'] ?? null, function () use ($array_request) {
      $this->where('price', '<=', $array_request['max']);
    });
  }

  /**
   * Scope a query to only product with minprice
   * 
   * @param array $array_request
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function minPrice($array_request)
  {
    return $this->when($array_request['min'] ?? null, function () use ($array_request) {
      $this->where('price', '>=', $array_request['min']);
    });
  }


  /**
   * Scope a query to short the result by key (name or price)
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
        if (!in_array($key, ['name', 'price', 'created_at'])) {
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