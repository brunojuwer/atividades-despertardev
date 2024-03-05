<?php

namespace Models;

use Models\Ingresso;

class Normal extends Ingresso
{
  public function __construct($valor)
  {
    $this->valor = $valor;
  }

  public function imprimeValor()
  {
    return $this->valor;
  }
}