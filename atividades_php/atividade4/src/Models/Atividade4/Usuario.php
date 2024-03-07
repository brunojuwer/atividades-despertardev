<?php

namespace Models\Atividade4;

class Usuario {
  private $nome;
  private $livrosEmprestados = [];

  public function __construct($nome) {
      $this->nome = $nome;
  }

  public function getNome() {
      return $this->nome;
  }

  public function emprestarLivro(Livro $livro) {
      if ($livro->isDisponivel()) {
          $livro->emprestar();
          $this->livrosEmprestados[] = $livro;
      } else {
          echo "Desculpe, o livro '{$livro->getTitulo()}' não está disponível para empréstimo. <br>";
      }
  }

  public function devolverLivro(Livro $livro) {
      $livroKey = array_search($livro, $this->livrosEmprestados);
      if ($livroKey !== false) {
          unset($this->livrosEmprestados[$livroKey]);
          $livro->devolver();
      } else {
          echo "Você não possui o livro '{$livro->getTitulo()}' emprestado. <br>";
      }
  }

  public function listarLivrosEmprestados() {
      echo "Livros emprestados para {$this->nome}: <br>";
      foreach ($this->livrosEmprestados as $livro) {
          echo "- {$livro->getTitulo()} por {$livro->getAutor()} <br>";
      }
  }
}