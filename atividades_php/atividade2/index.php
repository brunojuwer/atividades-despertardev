<?php

require './Contador.php';

// Exercicio 1
$contador = new Contador;

echo "Exercicio 1";
echo "<br />";
echo "Incrementando 3X";
echo "<br />";

echo $contador->incrementar();
echo $contador->incrementar();
echo $contador->incrementar();
echo $contador->getCounter();
echo "<br />";

echo "Zerando";
echo "<br />";
echo $contador->zerar();
echo $contador->getCounter();
echo "<br />";

echo "<hr />";

// Exercicio 2

require './Bola.php';

echo "Exercicio 2";
echo "<br />";
$bola = new Bola('Branco', 23, "Madeira");

echo $bola->getCor();
echo "<br />";
echo "Trocando cor";
echo "<br />";
$bola->trocarCor('Vermelho');
echo $bola->getCor();
echo "<br />";


// exercicio 3

require './ContaCorrente.php';

$contaCorrente = new ContaCorrente('0945341', 'Bruno', 10000.00);

$contaCorrente->alterarNome('Bruno Juwer');
echo "Novo saldo depois de saque {$contaCorrente->sacar(100.00)} <br>";
echo "Novo saldo depois de saque {$contaCorrente->deposito(500.00)} <br>";

echo "Saldo final: {$contaCorrente->getSaldo()}";


// exercicio 4
require './Calculadora.php';

echo "<br>";
echo "exercicio 4";
echo "<br>";
$calculadora = new Calculadora();


$calculadora->somar(2, 2);
$calculadora->somar(2, 4);
$calculadora->dividir(8, 4);
$calculadora->subtrair(13, 4);
$calculadora->multiplicar(22, 4);
$calculadora->multiplicar(23, 4);
$calculadora->historico();

echo "<br>";

// Exercicio 5

require './BombaCombustivel.php';

$bomba = new BombaCombustivel('Aditivado', 4.32, 50);
echo "Bomba Combustível <br>";

echo "Valor por 20 litros R$ {$bomba->abastecerPorLitro(20)}";
echo "<br>";

echo "Litros {$bomba->abastecerPorValor(20.00)} por R$20,00";
echo "<br>";

echo " {$bomba->abastecerPorValor(20.00)} por R$20,00";
echo "<br>";

echo " {$bomba->abastecerPorValor(200.00)} por R$200,00";
echo "<br>";

echo " {$bomba->alterarQuantidadeCombustivel(200.00)} Colocando 200 litros";
echo "<br>";

echo " {$bomba->abastecerPorValor(200.00)} por R$200,00";
echo "<br>";

echo "Carro <br>";

require "./Carro.php";

$carro = new Carro(10);
$carro->adicionarGasolina(50);
$carro->andar(200);

echo "Gasolina restante {$carro->obterGasolina()}";