<?php

namespace App\Services;

class CategoryCacheService extends CacheService
{
    public function __construct(
        protected string $key
    )
    {
        $this->key = $key;
    }
}
