/*
  4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
    descontos para todos, mas especialmente para mulheres. Faça um
    programa que leia nome, sexo e o valor das compras do cliente e
    calcule o preço com desconto. Sabendo que:

    a. Homens ganham 5% de desconto
    b. Mulheres ganham 13% de desconto
*/

let nome = prompt("Qual seu nome?");
let sexo = prompt("Qual seu sexo? F/M").toLowerCase();
let value = Number(prompt("Qual o valor da compra?"));

if(sexo === "f") {
  document.write(`${nome} o valor com desconto é: ${(value - (value * 0.13)).toFixed(2)}`);
} else if (sexo === 'm'){
  document.write(`${nome} o valor com desconto é: ${(value - (value * 0.05)).toFixed(2)}`);
} else {
  document.write("Opção de sexo inválida");
}