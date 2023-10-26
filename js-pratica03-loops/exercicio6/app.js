/*
  6. Desenvolva um algoritmo que mostre uma contagem regressiva de
  30 até 1, marcando os números que forem primos, exatamente
  como mostrado abaixo:
  30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/

const numberToDecrement = Number(prompt("Digite um número inteiro e positivo: "));
let printNumbers2 = ""
for (let number = numberToDecrement; number >= 1; number--) {
  let isPrime = false;
    if (number <= 1) { // se for 1 ou menor não é primo
      isPrime = false;
    }
    if (number === 2) { // se for 2 é primo
      isPrime = true;
    }
    if(number % 2 === 0 && number !== 2) { // se for par acima de 2 não é primo
      isPrime = false;
    }
    if(number % 2 !== 0 && number >= 2) {
      let vezesZero = 0
      for (let i = number; i >= 1; i--) { // verifica se tem mais de um divisor
        if(number % i === 0) {
          vezesZero ++;
          if(vezesZero > 2) {
            isPrime = false;
          }
          if(vezesZero === 2) {
            isPrime = true;
          }
        }
      }
    }
  if(isPrime) {
    printNumbers2 += `[${number}] `;
  } else {
    printNumbers2 += `${number} `;
  }
}
document.write(`${printNumbers2}`);