/*
  5. Faça um programa usando a estrutura “for” que leia um número
  inteiro positivo e mostre na tela uma contagem de 0 até o valor
  digitado:
  Ex: Digite um valor: 9
  Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/

const number = Number(prompt("Digite um número inteiro e positivo: "));
let printNumbers = ""

for (let i = 1; i <= number; i++) {
  printNumbers += `${i} `;
}

document.write(`${printNumbers} FIM!`);