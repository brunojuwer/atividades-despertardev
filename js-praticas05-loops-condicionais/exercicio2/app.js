/*
  2. Desenvolva um aplicativo que leia o salário e o sexo de vários
    funcionários. No final, mostre o total de salários pagos aos homens e
    o total pago às mulheres. O programa vai perguntar ao usuário se
    ele quer continuar ou não sempre que ler os dados de um
    funcionário.
*/

let continuar = true;
let salarioHomens = 0;
let salarioMulheres = 0;
let qntSalariosMulheres = 0
let qntSalariosHomens = 0

while(continuar) {
  let homenOuMulher = prompt("Qual o sexo do funcionário? F/M").toLowerCase();
  let salario = Number(prompt("Digite o salário:"));
  continuar = confirm("Deseja continuar?");

  if(homenOuMulher === "f") {
    salarioMulheres += salario;
    qntSalariosMulheres++;
  } else if (homenOuMulher === 'm') {
    salarioHomens += salario;
    qntSalariosHomens++;
  }
}

document.write(`Salário total das mulheres: R$${salarioMulheres} <br>`);
document.write(`Quantidade de salários para as mulheres: ${qntSalariosMulheres} <br>`);
document.write(`Salário total dos homens: R$${salarioHomens} <br>`);
document.write(`Quantidade de salários para as mulheres: ${qntSalariosHomens}`);
