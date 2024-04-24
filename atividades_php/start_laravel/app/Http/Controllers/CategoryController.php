<?php

namespace App\Http\Controllers;

use App\Services\CacheService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'success' => true, 
            'msg' => "Litagem de categorias.",
            'categories' => CacheService::getData('categories')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name'=> 'required|min:1|max:20',
                'active'=> 'required|boolean',
                'id' => 'required|int',
            ], [
                'name.required' => 'Campo nome é obrigatório.',
                'id.required' => 'Campo id é obrigatório.',
                'active.required' => 'Campo ativo é obrigatório.'
            ]);

            $categories = CacheService::getData('categories');

            $data = $request->json()->all();

            $categories->push($data);

            CacheService::updateData('categories', $categories);

            return response()->json([
                'success' => true,
                'msg' => "Categoria criada com sucesso."
            ]);

        } catch (\Exception $error) {
            Log::error($error->getMessage());

            return response()->json([
                'success' => false, 
                'msg' => $error->getMessage()
            ], 400);
        }

        return response()->json([
            'success' => true, 
            'msg' => "Store/Save de categorias."
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        return response()->json([
            'success' => true, 
            'msg' => "Categoria", 
            'data' => $request->attributes->get('category')
        ]);
    }

 
    public function update(Request $request)
    {
        if(collect($request)->has('name', 'active')){
           
            $category = $request->attributes->get('category');
            $categories = $request->attributes->get('categories');

            $category->name = $request->name;
            $category->price = $request->price;
            $category->active = $request->active;

            $index = $categories->search(function ($item) use ($category) {
                return $item->id == $category->id;
            });

            $categories->replace($index, collect($category)->all());

            CacheService::updateData('categories', $categories);

            return response()->json(['success' => true, 'msg' => "Categoria atualizada com sucesso."]);

        }

        return response()->json(['success' => false, 'msg' => "Campos nome e ativo são obrigatórios."], 400);
    }

   
    public function destroy(Request $request)
    {
        $categories = $request->get('categories');

        $category = $request->get('category');

        $filtered = $categories->reject(function ($item) use ($category){
            if(collect($item)->has('id')){
                return $item->id == $category->id;
            }

            return false;
        })->values()->collect();

        CacheService::updateData('categories', $filtered);

        return response()->json(['success' => true, 'msg' => "Categoria deletada, $category->id."]);
    }
}
