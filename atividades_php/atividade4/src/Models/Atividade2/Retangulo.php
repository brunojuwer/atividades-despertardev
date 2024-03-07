<?php

namespace Models\Atividade2;

class Retangulo implements FormatoDeElemento
{

  public $comprimento;
  public $altura;

  function desenhar(): void
  {
    echo 'Desenhando Retangulo! <br>';
  }

  function redimensionar(): void
  {
    echo 'Redimensionando Retangulo! <br>';
  }
}