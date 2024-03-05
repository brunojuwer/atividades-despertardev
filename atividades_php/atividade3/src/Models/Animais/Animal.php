<?php

namespace Models\Animais;

abstract class Animal
{
  protected $peso;

  protected $tipo;

  protected $quadrupede;

  abstract public function barulho();
  abstract public function mover();
}