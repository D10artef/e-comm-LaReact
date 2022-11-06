<?php

namespace Database\Seeders;

use App\Models\PaymentProvider;
use App\Models\PaymentType;
use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bankList = ['Visa', 'Paypal', 'Electron'];
        $mobilList = ['Orange', 'Virgin', 'Free'];

        $bank_payment = PaymentType::create(['type' => 'Bank']);
        $mobil_payement = PaymentType::create(['type' => 'Mobile']);

        foreach($bankList as $bank){
            $payment_provider = new PaymentProvider();
            $payment_provider->name = $bank;
            $payment_provider->paymentType()->associate($bank_payment);
            $payment_provider->save();
        }

        foreach ($mobilList as $mobil) {
            $payment_provider = new PaymentProvider();
            $payment_provider->name = $mobil;
            $payment_provider->paymentType()->associate($mobil_payement);
            $payment_provider->save();
        }
    }
}
