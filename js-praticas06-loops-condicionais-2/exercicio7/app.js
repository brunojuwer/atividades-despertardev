/*
  7. Utilizando do...while, imprima na tela a soma de todos os números
  entre 10 e 100.
*/

let valorInicial = 10;
let soma = 0;

do {
   soma += valorInicial;
   valorInicial++;
} while (valorInicial <= 100);

document.write(`Valor da soma é ${soma}`);