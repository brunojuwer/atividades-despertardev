/*
  3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
    o incremento, mostrando em seguida todos os valores no intervalo:
    Ex:
    Digite o primeiro Valor: 3
    Digite o último Valor: 10
    Digite o incremento: 2
    Contagem: 3 5 7 9 Acabou!
*/

let firstValue = Number(prompt("Digite o valor inicial: "));
let lastValue = Number(prompt("Digite o valor final: "));
let increment = Number(prompt("Digite o incremento: "));
let count = ""

for (let i = firstValue; i < lastValue; i += increment) {
  count += ` ${i}`;
}

document.write(`Contagem: ${count} Acabou!`);