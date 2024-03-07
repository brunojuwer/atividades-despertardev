<?php

namespace Models\Atividade4;

class Livro {

    protected $titulo;
    protected $autor;
    protected $anoPublicacao;
    protected $disponivel;

    public function __construct($titulo, $autor, $anoPublicacao) {
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->anoPublicacao = $anoPublicacao;
        $this->disponivel = true;
    }

    public function getTitulo() {
        return $this->titulo;
    }

    public function getAutor() {
        return $this->autor;
    }

    public function getAnoPublicacao() {
        return $this->anoPublicacao;
    }

    public function isDisponivel() {
        return $this->disponivel;
    }

    public function emprestar() {
        if ($this->disponivel) {
            $this->disponivel = false;
            echo "Livro '{$this->titulo}' emprestado com sucesso! <br>";
        } else {
            echo "Livro '{$this->titulo}' não está disponível no momento. <br>";
        }
    }

    public function devolver() {
        $this->disponivel = true;
        echo "Livro '{$this->titulo}' devolvido com sucesso! <br>";
    }
}