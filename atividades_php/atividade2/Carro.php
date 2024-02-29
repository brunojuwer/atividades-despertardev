<?php

class Carro 
{
  public function __construct(
    private $consume,
    private $gas = 0
  )
  {
    $this->gas = $gas;
  }

  public function andar($distance)
  {
    $necessaryGas = $distance / $this->consume;
        if ($necessaryGas <= $this->gas) {
            $this->gas -= $necessaryGas;
            echo "O carro andou $distance km. Combustível restante: {$this->gas} litros.";
            return;
        }
        echo "Não há combustível suficiente para percorrer essa distância.";
  }

  public function adicionarGasolina($gas)
  {
    $this->gas += $gas;
  }

  public function obterGasolina()
  {
    return $this->gas;
  }

}