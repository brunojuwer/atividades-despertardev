/*
  1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
    O programa vai parar quando for digitada a idade 999. No final,
    mostre quantos alunos existem na turma e qual é a média de idade
    do grupo.
*/

let height;
let numberOfStudents = 0
let average = 0;

while(height !== 999) {
  height = Number(prompt("Digite idades ou 999 para sair:"));
  if(height !== 999) {
    average += height;
    numberOfStudents++
  }
}

document.write(`Quantidade de alunos: ${numberOfStudents} <br>`);
document.write(`Média: ${(average / numberOfStudents).toFixed(2)}`);