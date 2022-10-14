<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => $this->faker->numerify('Product - ########'),
            "price" => $this->faker->randomFloat(2, 1000, 100000),
            "description" => $this->faker->sentence(15),
            "quantity" => $this->faker->randomNumber(2, false),
        ];
    }
}
