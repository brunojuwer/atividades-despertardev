<?php

class BombaCombustivel
{
  public function __construct(
    private $tipoCombustivel,
    private $valorLitro,
    private $quantidadeCombustivel
  )
  {
    $this->tipoCombustivel = $tipoCombustivel;
    $this->valorLitro = $valorLitro;
    $this->quantidadeCombustivel = $quantidadeCombustivel;
  }


  public function abastecerPorValor($valor)
  {
    $litrosAbastecidos = $valor / $this->valorLitro;
    if($litrosAbastecidos > $this->quantidadeCombustivel) {
      echo "Quantidade de combustivel insuficiente!";
      return;
    }

    $this->quantidadeCombustivel -= $litrosAbastecidos;
    return round($litrosAbastecidos, 2);
  }

  public function abastecerPorLitro($litro)
  {
    if($litro > $this->quantidadeCombustivel) {
      echo "Quantidade de combustivel insuficiente!";
      return;
    }

    $valor = $this->valorLitro * $litro;
    $this->quantidadeCombustivel -= $litro;
    return round($valor, 2);
  }

  public function alterarValor($valor)
  {
    $this->valorLitro = $valor;
  }

  public function alterarCombustivel($combustivel)
  {
    $this->tipoCombustivel = $combustivel;
  }

  public function alterarQuantidadeCombustivel($quantidade)
  {
    return round($this->quantidadeCombustivel += $quantidade);
  }
}