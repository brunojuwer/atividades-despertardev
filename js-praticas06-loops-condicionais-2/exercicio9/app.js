/*
  9. Informe um valor a uma variável e imprima no console se o número
    é primo.
*/

const numero = Number(prompt("Digite um número para verificar se é primo:"));

if (numero <= 1) {
  console.log(`Número ${numero} não é primo.`);
} else if(numero > 2 && numero % 2 === 0) {
  console.log(`Número ${numero} não é primo.`);
} else {
  let vezesZero = 0
  for (let i = numero; i >= 1; i--) { 
    if(numero % i === 0) {
      vezesZero ++;
      if(vezesZero === 3){
        console.log(`Número ${numero} não é primo.`);
        break;
      }
    }
  }
  if(vezesZero === 2) {
    console.log(`Número ${numero} é primo.`)
  }
}
  