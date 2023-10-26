/**
  2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
    Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
    Construa um algoritmo que calcule e imprima quantos anos serão
    necessários para que:
    a. Lucas e Pedro tenham o mesmo tamanho;
    b. Lucas seja maior que Pedro.
*/

let pedroHeight = 150;
let lucasHeight = 110;
let years = 0;

while(lucasHeight < pedroHeight) {
  pedroHeight += 2;
  lucasHeight += 3;
  years++;
}

document.write(`Quantidade de anos de Lucas e Pedro até terem o mesmo tamanho: ${years} anos. <br>`);

if(pedroHeight === lucasHeight) {
  pedroHeight += 2;
  lucasHeight += 3;
  years++;
}

document.write(`Quantidade de anos até que Lucas passe Pedro: ${years} anos.`);