<?php

echo "<h1>Prática OOP</h1>";

echo "<h2>Atividade 1</h2>";
use Models\Camarote;
use Models\Normal;
use Models\Vip;

require_once __DIR__ . '/../Models/Ingresso.php';
require_once __DIR__ . '/../Models/Normal.php';
require_once __DIR__ . '/../Models/Vip.php';
require_once __DIR__ . '/../Models/Camarote.php';

$ingressoNormal = new Normal(29.99);
$ingressoVip = new Vip(29.99, 20.89);
$ingressoCamarote = new Camarote(29.99, 50.37);

echo "Classe valor Ingresso Normal = R$ {$ingressoNormal->imprimeValor()} <br />";
echo "Classe valor Ingresso Vip = R$ {$ingressoVip->imprimeValor()} <br />";
echo "Classe valor Ingresso Camarote = R$ {$ingressoCamarote->imprimeValor()} <br />";

echo "<hr>";
echo "<h2>Atividade 2</h2>";

use Models\Imoveis\Novo;
use Models\Imoveis\Velho;

require_once __DIR__ . '/../Models/Imoveis/Imovel.php';
require_once __DIR__ . '/../Models/Imoveis/Novo.php';
require_once __DIR__ . '/../Models/Imoveis/Velho.php';

$imovelNovo = new Novo(5032.92);
$imovelVelho = new Velho(2529.91);

$imovelNovo->setEndereco('Rua Tiradentes, 1200');
$imovelNovo->setPreco(300230.72);
echo "Endereço do imóvel novo = {$imovelNovo->getEndereco()} <br />";
echo "Valor do imóvel novo = R$ {$imovelNovo->getPreco()} <br />";

$imovelVelho->setEndereco('Rua Tiradentes, 1100');
$imovelVelho->setPreco(200230.78);
echo "Endereço do imóvel velho = {$imovelVelho->getEndereco()} <br />";
echo "Valor do imóvel velho = R$ {$imovelVelho->getPreco()} <br />";


echo "<hr>";
echo "<h2>Atividade 3</h2>";

use Models\Animais\Gato;
use Models\Animais\Cachorro;
use Models\Animais\Cavalo;

require_once __DIR__ . '/../Models/Animais/Animal.php';
require_once __DIR__ . '/../Models/Animais/Gato.php';
require_once __DIR__ . '/../Models/Animais/Cachorro.php';
require_once __DIR__ . '/../Models/Animais/Cavalo.php';


$gato = new Gato(5, 'Siames', true);
$cachorro = new Cachorro(10, 'Vira-lata', true);
$cavalo = new Cavalo(500, 'Bretão', true);

echo "Barulho do gato = {$gato->barulho()} <br />";
echo "Gato afiando garras = {$gato->afiando_garras()} <br />";

echo "Barulho do cachorro = {$cachorro->barulho()} <br />";
echo "Cachorro abanando o rabo = {$cachorro->abanar_rabo()} <br />";

echo "Barulho do cavalo = {$cavalo->barulho()} <br />";
echo "Cavalo galopando = {$cavalo->galopando()} <br />";