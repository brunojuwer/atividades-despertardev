<?php

namespace App\Http\Middleware;

use App\Exceptions\CategoryNotFoundException;
use App\Services\CacheService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ExistCategory
{
 
    public function handle(Request $request, Closure $next): Response
    {
        $categories = CacheService::getData('categories');
        if($request->method() !== 'POST') {
            $category = $this->findOrFail($request->route('id'), $categories);
            $this->addRequestAtributes($request, $category, $categories);
        } else {
            $category = $this->findOrFail($request->category_id, $categories);
            $this->addRequestAtributes($request, $category, $categories);
        }
        return $next($request);
    }

    private function findOrFail($id, $categories)
    {
        $category = $categories->firstWhere('id', $id);
        if(null === $category){
            throw new CategoryNotFoundException("Categoria não com id=$id encontrada.");
        }
        return $category;
    }

    private function addRequestAtributes(&$request, $category, $categories): void
    {
        $request->attributes->add(['category' => $category]);
        $request->attributes->add(['categories' => $categories]);
    }
}
