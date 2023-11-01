/*
  4. Desenvolva um algoritmo que declare uma lista de 10 números e
  solicite um número para o usuário e no final informe se o número
  que o usuário digitou está dentro da lista ou não.
*/

const numbers = [123, 26, 31, 42, 35, 23, 74, 18, 29, 14];
const guessedNumber = Number(prompt("Tente acertar o número: "));
let win = false;

for (const num of numbers) {
  win = num === guessedNumber;
  if(win) break;
}

if(win) {
  document.write(`Acertou o número no indíce ${numbers.indexOf(guessedNumber)} <br>`);
  document.write(`Array ${numbers.join(", ")}`);
} else {
  document.write(`Descuple vc não acertou: ${numbers.join(", ")}`);
}