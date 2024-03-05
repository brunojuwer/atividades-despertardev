<?php

namespace Models\Imoveis;

abstract class Imovel 
{
  protected $endereco;
  protected $preco;

  abstract public function getEndereco();

  abstract public function getPreco();

  abstract public function setEndereco($endereco);
  
  abstract public function setPreco($preco);
}