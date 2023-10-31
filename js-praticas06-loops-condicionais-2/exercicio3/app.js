/*
  3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
    número de 1 a 7 e imprimir no console o dia da Semana. Para este
    exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
    por diante. Caso o número recebido não esteja neste intervalo
    imprimir “Dia não reconhecido”.
*/

const diaDaSemana = Number(prompt("Digite um número de 1 a 7 para imprimir um dia da semana:"));

if(diaDaSemana === 1) {
  console.log("Domingo");
} else if(diaDaSemana === 2) {
  console.log("Segunda-feira");
} else if(diaDaSemana === 3) {
  console.log("Terça-feira");
} else if(diaDaSemana === 4) {
  console.log("Quarta-feira");
} else if(diaDaSemana === 5) {
  console.log("Quinta-feira");
} else if(diaDaSemana === 6) {
  console.log("Sexta-feira");
} else if(diaDaSemana === 7) {
  console.log("Sabádo");
} else {
  console.log("Dia não reconhecido");
}