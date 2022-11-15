<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Offer;
use App\Models\Product;
use App\Models\Service;
use App\Models\User;
use App\Models\UserInfo;
use Database\Factories\UserInfoFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
                'email' => 'you_are_user@email.com',
                'password' => Hash::make('your_password'),
            ]);

        UserInfo::factory()->for($user, 'user')->create();
        

        $users = User::factory(4)->create();
        foreach($users as $user){
            UserInfo::factory()->for($user, 'user')->create();
        }

        
        $categories = Category::factory()->count(5)->create();
        $offers = Offer::factory()->count(4)->create();

        // If you like to populate by Category and Offer already created
        $categories = Category::all();
        $offers = Offer::all();


        for ($i = 0; $i < 1000; $i++) {
            Product::factory()
                ->for($categories->random(), 'category')
                ->for($offers->random(), 'offer')
                ->create();
        }

        $service = Service::factory()->count(4)->create();

        $this->call([
            AdminSeeder::class,
            PaymentTypeSeeder::class,
        ]);
        
    }
}
