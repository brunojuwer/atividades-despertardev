<?php


class Calculadora
{

    private array $history = [];

    public function historico()
    {
      echo "<pre>";
      echo "Histórico: <br>";
        print_r($this->history);
      echo "</pre>";
    }


    public function somar($numero1, $numero2)
    {
      $sum = $numero1 + $numero2;
      array_push($this->history, "$numero1 + $numero2 = $sum");
    }

    public function subtrair($numero1, $numero2)
    {
      $sum = $numero1 - $numero2;
      array_push($this->history, "$numero1 - $numero2 = $sum");
    }

    public function dividir($numero1, $numero2)
    {
      $sum = $numero1 / $numero2;
      array_push($this->history, "$numero1 / $numero2 = $sum");
    }

    public function multiplicar($numero1, $numero2)
    {
      $sum = $numero1 * $numero2;
      array_push($this->history, "$numero1 X $numero2 = $sum");
    }
}