<?php 

namespace App\Builders;

use Illuminate\Database\Eloquent\Builder;

class BaseBuilder extends Builder
{
  /**
   * Scope a query to search by name or description
   * 
   * @param array $query_request_array 
   * @return \Illuminate\Database\Eloquent\Builder
   */
  public function filter($query_request_array)
  {
    return $this->when($query_request_array['search'] ?? null, function () use ($query_request_array) {
      $search = $query_request_array['search'];
      $this->where(function () use ($search) {
        $this->where('name', 'like', '%' . $search . '%')
        ->orWhere('description', 'like', '%' . $search . '%');
      });
    });
  }

  public function orderByKey($query_request_array)
  {
    return $this->when(
      $query_request_array['orderby'] ?? null,
      function () use ($query_request_array) {
        $key = $query_request_array['orderby'];
        if (!in_array($key, ['name', 'created_at'])) {
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