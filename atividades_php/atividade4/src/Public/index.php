<?php

// Atividade 1

use Models\Item;
use Models\Pedido;

const BASE_DIR = __DIR__ . '/../';

require_once BASE_DIR . 'Models/Item.php';
require_once BASE_DIR . 'Models/Pedido.php';

$item1 = new Item();
$item2 = new Item();
$item3 = new Item();

$pedido = new Pedido();

$item1->nome = 'Xis Tudo';
$item1->descricao = 'Xis com carne de gado dupla';
$item1->valor = 25.00;

$item2->nome = 'Xis Salada';
$item2->descricao = 'Xis normal';
$item2->valor = 20.00;

$item3->nome = 'Xis Bacon';
$item3->descricao = 'Xis normal com bacon';
$item3->valor = 22.00;

$pedido->itens = [$item1, $item2, $item3];
$pedido->valorTotal = $item1->valor + $item2->valor + $item3->valor;

echo '<h2>Atividade 1</h2>';
echo '<pre>';
  print_r($pedido);
echo '</pre>';


// Atividade 2
echo '<hr>';
echo '<h2>Atividade 2</h2>';

use Models\Atividade2\Circulo;
use Models\Atividade2\Retangulo;

require_once BASE_DIR . 'Models/Atividade2/FormatoDeElemento.php';
require_once BASE_DIR . 'Models/Atividade2/Circulo.php';
require_once BASE_DIR . 'Models/Atividade2/Retangulo.php';


$circulo = new Circulo;
$retangulo = new Retangulo;

$circulo->raio = 23;
$circulo->desenhar();
$circulo->redimensionar();

$retangulo->altura = 23;
$retangulo->comprimento = 45;
$retangulo->desenhar();
$retangulo->redimensionar();


// Atividade 3
echo '<hr>';
echo '<br>';
echo '<h2>Atividade 3</h2>';

echo '<img src="./Atividade3.png"><img>';


// Atividade 4
echo '<hr>';
echo '<br>';
echo '<h2>Atividade 4</h2>';

use Models\Atividade4\Livro;
use Models\Atividade4\Usuario;

require_once BASE_DIR . 'Models/Atividade4/Livro.php';
require_once BASE_DIR . 'Models/Atividade4/Usuario.php';

$livro1 = new Livro("Neuromancer", "Willian Gibson", 1989);
$livro2 = new Livro("Mona Lisa Overdrive", "Willian Gibson", 1993);

$usuario1 = new Usuario("Bruno Juwer");
$usuario2 = new Usuario("Joana Macedo");

$usuario1->emprestarLivro($livro1);
$usuario2->emprestarLivro($livro2);

$usuario1->listarLivrosEmprestados();
$usuario2->listarLivrosEmprestados();

$usuario1->devolverLivro($livro1);

$usuario1->listarLivrosEmprestados();