<?php

namespace Models\Imoveis;

class Velho extends Imovel
{

  protected $desconto;

  public function __construct($desconto)
  {
    $this->desconto = $desconto;
  }

  public function getEndereco()
  {
    return $this->endereco;
  }
  public function getPreco()
  {
    return $this->preco;
  }
  public function setEndereco($endereco)
  {
    $this->endereco = $endereco;
  }
  public function setPreco($preco)
  {
    $this->preco = $preco - $this->desconto;
  }
}