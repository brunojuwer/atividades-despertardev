<?php

namespace Models\Atividade2;

class Circulo implements FormatoDeElemento
{

  public $raio;

  function desenhar(): void
  {
    echo 'Desenhando Circulo! <br>';
  }
  function redimensionar(): void
  {
    echo 'Redimensionando Circulo! <br>';
  }
}