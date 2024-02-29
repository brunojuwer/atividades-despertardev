<?php

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

class Bola 
{

  public function __construct(
    private $cor,
    private $circunferencia,
    private $material,
  )
  {
    $this->cor = $cor;
    $this->circunferencia = $circunferencia;
    $this->material = $material;
  }

  public function getCor()
  {
    return $this->cor;
  }

  public function trocarCor($cor)
  {
    $this->cor = $cor;
  }
}