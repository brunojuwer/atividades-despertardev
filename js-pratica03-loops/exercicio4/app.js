/*
  4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
  e verifique quais números são múltiplos de 3 e quais são múltiplos
  de 5.
*/

let multiplosDe3 = "";
let multiplosDe5 = "";

for (let i = 1; i <= 250; i++) {
  if(i % 3 === 0) {
    multiplosDe3 += `${i} `;
  }
  if(i % 5 === 0) {
    multiplosDe5 += `${i} `;
  }
}
document.write("Múltiplos de 3 até 250:<br>")
document.write(multiplosDe3);
document.write("<br>")
document.write("<br>")
document.write("Múltiplos de 5 até 250:<br>")
document.write(multiplosDe5);