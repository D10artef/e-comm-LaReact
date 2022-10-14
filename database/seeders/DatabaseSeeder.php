<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Offer;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $categories = Category::factory()->count(5)->create();
        $offers = Offer::factory()->count(4)->create();
        // $categories = Category::all();
        // $offers = Offer::all();


        for ($i = 0; $i < 1000; $i++) {
            Product::factory()
                ->for($categories->random(), 'category')
                ->for($offers->random(), 'offer')
                ->create();
        }
    }
}
