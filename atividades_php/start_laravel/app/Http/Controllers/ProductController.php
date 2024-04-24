<?php

namespace App\Http\Controllers;

use App\Services\CacheService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function index()
    {
        $products = CacheService::getData('products');

        return response()->json([
            'success' => true, 
            'msg' => "Listagem de produtos.", 'data' => $products
        ]);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'name'=> 'required',
                'price'=> 'required',
                'id' => 'required',
                'stock' => 'required',
                'category_id' => 'required'

            ], [
                'name.required' => 'Campo nome é obrigatório.',
                'price.required' => 'Campo preço é obrigatório.',
                'id.required' => 'Campo id é obrigatório.',
                'stock.required' => 'Campo stock é obrigatório.',
                'category_id.required' => 'Campo category_id é obrigatório.'

            ]);

            $products = CacheService::getData('products');
            $data = $request->json()->all();

            $products->push($data);

            CacheService::updateData('products', $products);

            return response()->json(['success' => true, 'msg' => "Produto criado com sucesso."]);
        } catch (\Exception $error) {
            Log::error($error->getMessage());
            return response()->json(['success' => false, 'msg' => $error->getMessage()], 400);
        }
    }

    public function show(Request $request)
    {
        $categories = CacheService::getData('categories');
        $product = $request->attributes->get('product');

        return response()->json([
            'success' => true, 
            'msg' => "Lista do produto.", 
            'data' => $request->attributes->get('product')
        ]);
    }

    public function update(Request $request)
    {
        if(collect($request)->has('name', 'price')){
           
            $product = $request->attributes->get('product');
            $products = $request->attributes->get('products');

            $product->name = $request->name;
            $product->price = $request->price;

            $index = $products->search(function ($item) use ($product) {
                return $item->id == $product->id;
            });

            $products->replace($index, collect($product)->all());

            CacheService::updateData('products', $products);

            return response()->json(['success' => true, 'msg' => "Produto atualizado com sucesso."]);
        }
        return response()->json(['success' => false, 'msg' => "Campo nome e preço são obrigatórios."], 400);
    }

    public function destroy(Request $request)
    {
        $products = $request->get('products');

        $product = $request->get('product');

        $filtered = $products->reject(function ($item) use ($product){
            if(collect($item)->has('id')){
                return $item->id == $product->id;
            }
            return false;
        })->values()->collect();

        CacheService::updateData('products', $filtered);

        return response()->json(['success' => true, 'msg' => "Delete produto, $product->id."]);
    }
}