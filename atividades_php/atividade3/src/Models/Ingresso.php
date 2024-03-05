<?php

namespace Models;

abstract class Ingresso
{
  protected $valor;

  abstract public function imprimeValor();
  
}