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
        Product::create([
            'name' => '1kg papas',
            'price' => 4200,
            'description' => 'son papas sanas',
            'image' => 'imagenes/papas.jpg',
        ]);

        // Puedes agregar más productos si lo deseas
    }
}