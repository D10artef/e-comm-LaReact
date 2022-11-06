<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    private $protected =  [
        'firstname',
        'lastname',
        'phone',
        'address',
        'city',
        'country',
        'postal_code',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
