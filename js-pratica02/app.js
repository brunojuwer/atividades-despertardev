// Exercício 1
/*
  Escreva um algoritmo para ler uma temperatura em graus Celsius,
  calcular e escrever o valor correspondente em graus Fahrenheit.
 */
const celsius = Number(prompt("Digite uma temperatura em celsius: "));
const fahrenheit = (celsius * 1.8) + 32;
document.write("Fahrenheit: " + fahrenheit + "ºF");

document.write("<br>")

// Exercício 2
/**
  Crie um programa que peça um número de 1 a 7 e exiba o dia da
  semana correspondente utilizando a estrutura condicional switch.
 */
const dayWeek = Number(prompt("Digite entre 1 a 7 para mostrar um dia da semana: "));
switch(dayWeek) {
   case 1:
    document.write("Domingo");
    break
  case 2:
    document.write("Segunda-feira");
    break
  case 3:
    document.write("Terça-feira");
    break
  case 4:
    document.write("Quarta-feira");
    break
  case 5:
    document.write("Quinta-feira");
    break
  case 6:
    document.write("Sexta-feira");
    break
  case 7:
    document.write("Sábado");
    break
  default:
    document.write("Dia inválido!");
}

document.write("<br>")


 //Exercicio 3
/**
  Crie um programa que peça um número e verifique se ele é positivo,
  negativo ou zero.
 */
const number = Number(prompt("Digite um número: "));
if(number < 0) {
  document.write("Número negativo");
} else if(number > 0) {
  document.write("Número positivo");
} else {
  document.write("Número igual a zero");
}

document.write("<br>")



/**
 Exercicio 4:
 O custo de um carro novo ao consumidor é a soma do custo de
  fábrica com a porcentagem do distribuidor e dos impostos
  (aplicados ao custo de fábrica). Supondo que o percentual do
  distribuidor seja de 28% e os impostos de 45%, escrever um
  algoritmo para ler o custo de fábrica de um carro,calcular e escrever
  o custo final ao consumidor.
 */

const fabrica = Number(prompt("Digite o valor de fábrica de um carro: "));
const imposto = 0.45;
const distribuidor = 0.28;
const custoDoDistribuidor = fabrica * distribuidor;
const custoDosImpostos = fabrica * imposto;
const custoFinalAoConsumidor = fabrica + custoDoDistribuidor + custoDosImpostos;
document.write("R$" + custoFinalAoConsumidor.toFixed(2).replace(".", ","));

document.write("<br>")

/**
 Exercicio 5:
 Desenvolva um algoritmo que faça o cálculo do índice de massa
  corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
  que digite sua altura, em seguida solicitar que digite seu peso e que
  lhe exiba o status. O status vai variar da seguinte forma:
  a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
  “Você está abaixo da faixa de peso ideal”;
  b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
  “Você está acima da faixa de peso ideal”;

  c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
  24,99, o status a ser mostrado será “Você está dentro da faixa
  de peso ideal”.
 */

const peso = Number(prompt("Digite seu peso: "));
const altura = Number(prompt("Digite sua altura: "));
const imc = peso / (altura ** 2);
if(imc < 18.5) {
  document.write(`Seu IMC é ${imc.toFixed(2)}, você está abaixo da faixa de peso ideal`);
} else if (imc >= 18.5 && imc < 24.99) {
  document.write(`Seu IMC é ${imc.toFixed(2)}, você está dentro da faixa de peso ideal.`);
} else {
  document.write(`Seu IMC é ${imc.toFixed(2)}, você está acima da faixa de peso ideal. <br>`);
}

document.write("<br>")

// Exercicio 6
// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

const numX = Number(prompt("Digite um número: "));
const numY = Number(prompt("Digite um número: "));
const operacao = prompt("Digite uma operação '+', '-', '/', '*': ");
switch(operacao) {
  case "+":
    document.write(numX + numY);
    break
  case "-":
    document.write(numX - numY);
    break
  case "/":
    document.write(numX / numY);
    break
  default:
    document.write(numX * numY);
}

document.write("<br>")

/**
  7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
  a conta do usuário deve ser criada já com um saldo positivo. O
  usuário precisa informar a quantidade de dinheiro que deseja
  retirar, esse valor deve ser um número positivo, múltiplo de 5 e
  menor do que o saldo. Cada saque eletrônico cobra uma taxa de
  R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
  certo com o saque, e se o usuário informar um valor maior que o
  saldo deve ser informado ao usuário que o mesmo não tem dinheiro
  suficiente em conta para realizar o saque.
  OBS: Na verificação se o valor do saque é maior que o saldo deve
  ser considerado e também contabilizado o valor da taxa a ser
  cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
  da taxa do saque não pode ser maior que o saldo disponível.
 */

let conta = Number(prompt("Informe seu saldo: "));
const saque = Number(prompt("Informe o valor do saque: "));
const valorFinalEmContaSemTaxa = conta - saque;
const valorFinalEmContaComTaxa = conta - saque - 4.50;
if (conta <= 0) {
  document.write("Valor inicial da conta deve ser positivo!");
} else if(saque <= 0) {
  document.write("Saque deve ter um valor positivo");
} else if(saque % 5 !== 0) {
  document.write("Valor do saque deve ser multiplo de 5");
} else if(valorFinalEmContaSemTaxa <= 0) {
  document.write("Valor do saque deve ser menor que o valor em conta");
} else if(valorFinalEmContaComTaxa <= 0) {
  document.write("Valor do saque deve ser menor que o valor em conta devido a taxa de saque");
} else {
  conta = valorFinalEmContaComTaxa;
  document.write(`Seu saldo final é igual a: ${conta}`)
}

document.write("<br>")

// 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

const atletaPeso = Number(prompt("Digite seu peso: "));
const atletaIdade = Number(prompt("Digite sua idade: "));
if(atletaIdade <= 12) {
  document.write("Infantil")
} else if(atletaIdade <= 16) {
    if(atletaPeso <= 40) {
      document.write("Juvenil leve");
    } else {
      document.write("Juvenil pesado");
    }
} else if(atletaIdade <= 24) {
    if(atletaPeso <= 45) {
      document.write("Senior leve");
    } else if (atletaPeso <= 60){
      document.write("Senior médio");
    } else {
      document.write("Senior pesado");
    }
} else {
  document.write("Veterano");
}

document.write("<br>")

/**
    9. Escreva um programa que pergunte a velocidade de um carro. Caso
    ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
    multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
    km acima da velocidade permitida.
 */

const velocidade = Number(prompt("Qual a velocidade do seu carro:"));
const kmsAMais = velocidade - 80;

if(kmsAMais > 0) {
  const multa = kmsAMais * 5;
  document.write(`Você ultrapassou o limite de velocidade sua multa foi de R$${multa.toFixed(2).replace(".", ",")}`);
} else {
  document.write("Você não foi multado");
}