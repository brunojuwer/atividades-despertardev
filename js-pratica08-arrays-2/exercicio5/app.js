/*
  5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
    e que exiba a lista desses nomes na tela. Após exibir essa lista, o
    programa deve mostrar também os nomes na ordem inversa em
    que o usuário os digitou.

    Ex:
    Entrada: Édson, Marcelo, Letícia, Ju, Thobias
    Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/

const names = [];
const namesInverted = [];

for (let i = 0; i < 5; i++) {
  const name = prompt(`Digite o ${i+1}º nome: `);
  names.push(name);
  namesInverted[4 - i] = names[i];
}

document.write(`Lista de como o usuário digitou = ${names.join(", ")} <br>`);
document.write(`Lista invertida = ${namesInverted.join(", ")}`);