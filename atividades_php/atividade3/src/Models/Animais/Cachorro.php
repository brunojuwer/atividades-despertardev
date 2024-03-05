<?php

namespace Models\Animais;

class Cachorro extends Animal
{
  public function __construct($peso, $tipo, $quadrupede) 
  {
    $this->peso = $peso;
    $this->tipo = $tipo;
    $this->quadrupede = $quadrupede;
  }

  public function barulho()
  {
    return 'Auau!';
  }

  public function mover()
  {
    return 'Movendo!';
  }

  public function abanar_rabo()
  {
    return 'Abanando o rabo freneticamente!';
  }
}