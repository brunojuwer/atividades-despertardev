<?php

namespace Models\Animais;

class Cavalo extends Animal
{
  public function __construct($peso, $tipo, $quadrupede) 
  {
    $this->peso = $peso;
    $this->tipo = $tipo;
    $this->quadrupede = $quadrupede;
  }

  public function barulho()
  {
    return 'iiirrrrí!';
  }
  public function mover()
  {
    return 'Movendo!';
  }

  public function galopando()
  {
    return 'Galopando!';
  }
}