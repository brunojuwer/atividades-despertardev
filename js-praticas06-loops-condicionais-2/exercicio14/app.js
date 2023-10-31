/*
  14. Leia um número, utilizando WHILE multiplique este número por 3
  enquanto a soma seja menor que 500 e no final mostre qual o
  último valor
*/

let number = Number(prompt("Digite um número:"))
let ultimoValor = 0;

while (number < 500) {
  ultimoValor = number;
  number *= 3;
}
document.write(ultimoValor);