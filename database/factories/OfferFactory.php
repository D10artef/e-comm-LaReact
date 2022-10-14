<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->lexify('Offer - ???????'),
            'description' => $this->faker->paragraph(3),
            'active' => $this->faker->randomElement([0, 1]),
            'discount_percent' => $this->faker->randomElement([10, 15, 20, 25, 30])
        ];
    }
}
