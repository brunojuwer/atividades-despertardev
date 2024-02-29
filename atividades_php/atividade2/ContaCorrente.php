<?php

class ContaCorrente 
{

  public function __construct(
    private $numeroConta,
    private $nomeCorrentista,
    private $saldo = 0
  )
  {
    $this->numeroConta = $numeroConta;
    $this->nomeCorrentista = $nomeCorrentista;
    $this->saldo = $saldo;
  }

  public function alterarNome($nome)
  {
    $this->nomeCorrentista = $nome;
  }

  public function deposito($value)
  {
    if($value > 0) {
      return $this->saldo += $value;
    }
    return $this->saldo;
  }

  public function sacar($value)
  {
    if($value > 0 && $value <= $this->saldo) {
      return $this->saldo -= $value;
    }
    return $this->saldo;
  }

  public function getSaldo()
  {
    return $this->saldo;
  }

}