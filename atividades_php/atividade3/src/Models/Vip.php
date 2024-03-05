<?php

namespace Models;

class Vip extends Ingresso
{
  private $valorAdicional;

  public function __construct($valor, $valorAdicional)
  {
    $this->valor = $valor;
    $this->valorAdicional = $valorAdicional;
  }

  public function imprimeValor()
  {
    return $this->valor + $this->valorAdicional;
  }
}