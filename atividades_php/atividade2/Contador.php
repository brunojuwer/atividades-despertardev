<?php

class Contador 
{
  private $counter = 0;

  public function incrementar()
  {
    $this->counter++;
  }

  public function getCounter()
  {
    return $this->counter;
  }

  public function zerar()
  {
    $this->counter = 0;  
  }
} 