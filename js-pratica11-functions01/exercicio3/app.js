/*
  3. Crie uma função que recebe por parâmetro um valor inteiro e
  positivo e retorne verdadeiro se o número for primo ou falso se não
  for.
*/

function verifyPrimeNumber(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0 && number !== 2) return false;

  if(number % 2 !== 0 && number >= 2) {
    let vezesZero = 0
    for (let i = number; i >= 1; i--) {
      if(number % i === 0) {
        vezesZero ++;
        if(vezesZero > 2) return false;
      }
    }
  }
  return true;
}
console.log(verifyPrimeNumber(10))