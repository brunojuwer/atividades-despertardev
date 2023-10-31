/*
  13. Faça um algoritmo que armazene um número e imprima os
  números ímpares entre 1 e o número armazenado.
*/

const numero = Number(prompt("Digite um número para verificar a sequência de ímpares"));

for (let i = numero; i >= 1; i--) {
  if(i % 2 !== 0) {
    document.write(numero - i," "); // imprime de forma crescente
  }
}