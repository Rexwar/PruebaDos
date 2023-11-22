<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Ejemplo Producto',
            'price' => 19.99,
            'description' => 'Este es un producto de ejemplo',
            'image' => 'https://ejemplo.com/imagen.jpg',
        ]);

        // Puedes agregar más productos si lo deseas
    }
}