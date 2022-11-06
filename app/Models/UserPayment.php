<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'account'
    ];

    public function paymentProvider()
    {
        return $this->belongsTo(PaymentProvider::class);
    }

    public function getProviderName()
    {
        return $this->paymentProvider->name;
    }
}
