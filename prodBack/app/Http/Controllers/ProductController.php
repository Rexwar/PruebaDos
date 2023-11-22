<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // en el controlador
public function index()
{
    $products = Product::all();
    return response()->json($products);
}

public function store(Request $request)
{
    $request->validate([
        'name' => 'required',
        'price' => 'required|numeric',
        'image' => 'required',
    ]);

    $product = Product::create($request->all());
    return response()->json($product, 201);
}

public function update(Request $request, $id)
{
    $product = Product::findOrFail($id);
    $product->update($request->all());
    return response()->json($product, 200);
}

public function destroy($id)
{
    $product = Product::findOrFail($id);
    $product->delete();
    return response()->json(null, 204);
}

}
