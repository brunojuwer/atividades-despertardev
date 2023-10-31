/**
  16. Escreva um algoritmo que armazene o ano atual e o ano de
  nascimento de uma pessoa. Escrever uma mensagem no console
  que diga se ela poderá ou não votar este ano (não é necessário
  considerar o mês em que a pessoa nasceu).
 */

const anoAtual =  Number(prompt("Digite o ano atual: "));
const anoNasc = Number(prompt("Digite o ano de seu nascimento: "));
const idade = anoAtual - anoNasc;

if(idade >= 16) {
  console.log("Pode votar! ", idade);
} else {
  console.log("Não pode votar! ", idade );
}