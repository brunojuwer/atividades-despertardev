<?php

namespace Models\Imoveis;

class Novo extends Imovel
{

  protected $adicional;

  public function __construct($adicional)
  {
    $this->adicional = $adicional;
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
    $this->preco = $preco + $this->adicional;
  }
}