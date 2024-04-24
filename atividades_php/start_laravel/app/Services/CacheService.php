<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

class CacheService
{
    public static function getData(string $key): Collection
    {
        $data = Cache::get($key);
        $dataCollect = collect([]);

        if($data !== null){
            $dataCollect = collect(json_decode($data));
        }

        return $dataCollect;
    }

    public static function updateData(string $key, $updatedData): void
    {
        Cache::put($key, $updatedData->toJson());
    }
}