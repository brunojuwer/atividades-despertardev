/**
 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
    programa deverá calcular e mostrar:
    a. A menor altura do grupo;
    b. A maior altura do grupo;
 */

let smallerHeight = 10000;
let biggestHeight = -10000;

for (let i = 1; i <= 15; i++) {
   height = Number(prompt(`Digite a ${i}ª altura`));
   if(height < smallerHeight) {
     smallerHeight = height;
   }
   if(height > biggestHeight) {
    biggestHeight = height;
   }
}

document.write(`Menor altura: ${smallerHeight} <br>`);
document.write(`Maior altura: ${biggestHeight}`);