/**
  4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
    e se está trabalhando ou não, se a pessoa estiver trabalhando
    pergunte para ele o salário que está ganhando. Para cada pessoa
    cadastrada, pergunte ao usuário se ele deseja continuar
    cadastrando ou não. No final, mostre as pessoas que estão
    desempregadas, as pessoas que estão empregadas separadas
    pelas que ganham mais que 2500 e menos que 2500.

    Exemplo de resultado:
      Pessoas desempregadas:
      Nome: Alessandro, Idade: 28
      Nome: Alessandro, Idade: 28

      Pessoas empregadas com salários menores que 2500:
      Nome: Alessandro, Idade: 28, Salário: 1500
      Nome: Alessandro, Idade: 28, Salário: 2400

      Pessoas empregadas com salários maiores que 2500:
      Nome: Alessandro, Idade: 28, Salário: 2700
      Nome: Alessandro, Idade: 28, Salário: 3000
 */

let continuar = true;

const desempregadas = [];
const empregadasAte2500 = [];
const empregadasAcimaDe2500 = [];

while(continuar) {
  const nome = prompt("Qual o seu nome? ");
  const idade = Number(prompt("Qual a sua idade? "));
  const estaTrabalhando = confirm("Vc está trabalhando? ");
  let salario = 0;
    
  if(estaTrabalhando) {
    salario = Number(prompt("Qual o seu salário? "));
  }

  const pessoa = {
    nome,
    idade,
    estaTrabalhando,
    salario
  }

  if(!pessoa.estaTrabalhando) {
    desempregadas.push(pessoa);
  } else if(pessoa.salario <= 2500) {
    empregadasAte2500.push(pessoa);
  } else {
    empregadasAcimaDe2500.push(pessoa);
  }
  continuar = confirm("Vc deseja cadatrar mais pessoas?");
}

console.log("\n");

console.log("Pessoas desempregadas");
desempregadas.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
});

console.log("Pessoas empregadas com salários menores e até 2500: ");
empregadasAte2500.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});

console.log("Pessoas empregadas com salários maiores que 2500:");
empregadasAcimaDe2500.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
});