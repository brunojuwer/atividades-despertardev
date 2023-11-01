/*
  2. Criar um array e percorrê-lo utilizando o loop for of
    a. Crie um array com o nome "numeros" e adicione 5 números de
    sua escolha
    b. Utilize o loop for of para percorrer o array e exibir a soma dos
    números na tela
*/

const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (const numero of numeros) {
  soma += numero;
}

document.write(`Soma dos números: ${numeros} <br>`);
document.write("Soma: ", soma);