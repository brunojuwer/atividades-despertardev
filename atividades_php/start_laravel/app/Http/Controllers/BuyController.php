<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Services\CacheService;

class BuyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, int $id)
    {


    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        try {
            $request->validate([
                'quantity' => 'required'
            ], [
                'quantity.required' => 'Campo quantidade faltando!'
            ]);

            $products = CacheService::getProducts();
            $product = $products->firstWhere('id', $id);
            $product->stock += $request->quantity;

            $products->transform(function ($item) use ($product){
                if($item->id == $product->id){
                    return $product;
                }
                return $item;
            });

            CacheService::updateProducts($products);
            return response()->json(['success'=>true, 'msg'=> 'Produto ' . $product->name . ' atualizado para '. $product->stock .' !!']);


        }catch (Exception $error){
            Log::error($error->getMessage());
            return response()->json(['success' => false, 'msg' => $error->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
