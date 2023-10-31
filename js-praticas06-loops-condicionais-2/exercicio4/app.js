/*
  4. Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

const diaDaSemana = Number(prompt("Digite um número de 1 a 7 para imprimir um dia da semana:"));

switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sabádo");
    break;
  default:
    console.log("Dia não reconhecido");
    break;
}