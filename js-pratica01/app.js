// Exercício 1
document.write("<h4> Exercício 1 </h4>")
const age = 25;
document.write(`Minha idade é ${age} anos. <br />`);

// Exercício 2
document.write("<h4> Exercício 2 </h4>")
const x = 10;
const y = 10;
const z = x + y;
document.write(`O resultado da soma de ${x} e ${y} é ${z} <br />`);

// Exercício 3
document.write("<h4> Exercício 3 </h4>")
const total = 149.90;
const installments = 12;

const singleInstallment = total / 12;

document.write(`O valor total da compra foi R$ ${total.toFixed(2).replace(".", ",")} <br />`);
document.write(`Forma de pagamento: ${installments} vezes de R$ ${singleInstallment.toFixed(2).replace(".", ",")} <br />`);

// Exercício 4
document.write("<h4> Exercício 4 </h4>")

const minutes = 60;
const seconds = minutes * 60;

document.write(`${minutes} minutos equivale à ${seconds} segundos! <br />`);

// Exercício 5
document.write("<h4> Exercício 5 </h4>")

const name = "Bruno";
const note1 = 10;
const note2 = 5.9;
const note3 = 6.2;

const average = (note1 + note2 + note3) / 3;

document.write(`O aluno ${name} ficou com média ${average.toFixed(2).replace('.', ',')} <br />`);


// Exercício 6
document.write("<h4> Exercício 6 </h4>")

let ten = 10;
let twenty = 20;
let bkp = ten;

ten = twenty;
twenty = bkp;

document.write(`A variável "ten" está com o valor ${ten} <br/>`)
document.write(`A variável "twenty" está com o valor ${twenty} <br/>`)

// Exercício 7
document.write("<h4> Exercício 7 </h4>")

const voters = 100340;
const white = 10232;
const nulls = 2053;
const valid = voters - (white + nulls);
 
const percentWhite = toPercent(white);
const percentNulls = toPercent(nulls);
const percentValid = toPercent(valid);

function toPercent(value) {
  return (value / voters) * 100;
}

document.write(`Percentual de votos em branco: ${percentWhite.toFixed(2)}% <br/>`);
document.write(`Percentual de votos em nulos: ${percentNulls.toFixed(2)}% <br/>`);
document.write(`Percentual de votos em válidos: ${percentValid.toFixed(2)}% <br/>`);


// Exercício 8
document.write("<h4> Exercício 8 </h4>")

const firstNumber = 120;
const secondNumber = 30;

if(firstNumber === secondNumber){
  document.write(`Números iguais <br />`);
} else if (firstNumber > secondNumber) {
  document.write(`Primeiro é maior <br />`);
} else {
  document.write(`Segundo maior <br />`);
}


// Exercício 9
document.write("<h4> Exercício 9 </h4>")

const firstPrice = 0.30;
const secondPrice = 0.25;
const amountOfApples = 6;
let totalValue

if(amountOfApples >= 12) {
  totalValue = amountOfApples * secondPrice;
  document.write(`Valor total da compra: R$${totalValue.toFixed(2).replace('.', ',')} <br />`);
} else {
  totalValue = amountOfApples * secondPrice;
  document.write(`Valor total da compra: R$${totalValue.toFixed(2).replace('.', ',')} <br />`);
}

// Exercício 10 
document.write("<h4> Exercício 10 </h4>")

const userName = "Bruno";
const userAge = 25;

const currentYear = 2023;

document.write(`Nome: ${userName}, Idade: ${userAge}, nasceu em ${currentYear - userAge} <br />`);


// Exercício 11
document.write("<h4> Exercício 11 </h4>");
document.write("Alerta na página!");

const number = 98;
const isEvenNumber = number % 2 === 0;

if(isEvenNumber) {
  alert(`Número é par! ${number}`);
} else {
  alert(`Número é impar! ${number}`);
}


// Exercício 12
document.write("<h4> Exercício 12 </h4>");
document.write("Abra no console para ver o resultado!");

const personBirthYear = 1925;
const atualYear = 2023;
const personAge = atualYear - personBirthYear;

if(personAge >= 16) {
  console.log("Pode votar!");
} else {
  console.log("Não pode votar!");
}