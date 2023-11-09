/*
  5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
  é um valor perfeito ou falso se não for. Um valor é dito perfeito
  quando ele é igual a soma dos seus divisores excetuando ele
  próprio.

  Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

function isPerfectNumber(number) {
  let sumMultiples = 0;
  for (let j = number; j !== 0; j--) {
    if(number % j === 0 && number !== j) {
      sumMultiples += j;
    }
  }
  return sumMultiples === number;
}
console.log(isPerfectNumber(29));