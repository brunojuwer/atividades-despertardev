/**
 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
  inteiros já preenchido e imprima todos os valores pares.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let evenNumbers = "";

for (const number of numbers) {
  evenNumbers += number % 2 === 0 ? `${number}, ` : ""
}
document.write(evenNumbers);