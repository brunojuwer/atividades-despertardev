/**
  3. Escreva um algoritmo que faça a tabuada de um número e
    apresente o resultado de acordo com o modelo a seguir, sabendo
    que o multiplicando deverá ser fornecido pelo usuário (n) e a
    quantidade de iterações também (i).
    1 * 2 = 2
    2 * 2 = 4
    3 * 2 = 6
    ...
*/

const tabuada = Number(prompt("Qual a tabuada que você que verificar?"));
const i = Number(prompt("Quantas vezes deve ser múltiplicado?"));

for (let index = 0; index <= i; index++) {
  document.write(`${index} x ${tabuada} = ${index * tabuada} <br>`)
}
