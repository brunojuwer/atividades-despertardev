/**
 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
    média aritmética dos valores lidos, a quantidade de valores
    positivos, a quantidade de valores negativos e o percentual de
    valores negativos e positivos.
 */

let sum = 0;
let positiveNumbers = "";
let negativeNumbers = "";
let amountPositive = 0;
let amountNegative = 0;

for (let i = 1; i <= 10; i++) {
  let number = Number(prompt(`Digite o ${i}º número`))
  sum += number;
  if(number > 0) {
    amountPositive++;
    positiveNumbers += `${number} `;
  } else {
    amountNegative++;
    negativeNumbers += `${number} `;
  }
}

document.write(`Média: ${sum / 10} <br>`);
document.write('<br>');
document.write(`Números positivos: ${positiveNumbers} <br> Total positivos = ${amountPositive} <br> Percentual de números positivos: ${(amountPositive / 10) * 100}% <br>`);
document.write('<br>');
document.write(`Números negativos: ${negativeNumbers} <br> Total negativos = ${amountNegative} <br> Percentual de números negativos: ${(amountNegative / 10) * 100}% <br>`);