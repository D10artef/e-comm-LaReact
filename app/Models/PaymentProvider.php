<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentProvider extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }
}
