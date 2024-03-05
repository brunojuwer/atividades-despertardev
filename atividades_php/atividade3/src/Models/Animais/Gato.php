<?php

namespace Models\Animais;

class Gato extends Animal
{
  public function __construct($peso, $tipo, $quadrupede) 
  {
    $this->peso = $peso;
    $this->tipo = $tipo;
    $this->quadrupede = $quadrupede;
  }

  public function barulho()
  {
    return 'Miau!';
  }
  public function mover()
  {
    return 'Movendo!';
  }

  public function afiando_garras()
  {
    return 'Afiando as garras!';
  }
}