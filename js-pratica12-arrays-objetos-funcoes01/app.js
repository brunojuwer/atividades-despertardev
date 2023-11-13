const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

// -----------------------------------------------------------------------------------------

console.log("1. Imprima no console a quantidade de pessoas Total:")
console.log(data.length)

// -----------------------------------------------------------------------------------------

console.log("2. Imprima no console a quantidade de pessoas do sexo Feminino:")
console.log(data.filter(pessoa => pessoa.sexo === "F").length)

// -----------------------------------------------------------------------------------------

console.log("3. Imprima no console a soma do salário de todas as pessoas:")
const somaSalarios = data.reduce((acc, pessoa) => acc += pessoa.salario, 0)

console.log(`R$${somaSalarios.toFixed(2)}`.replace(".", ","));

// -----------------------------------------------------------------------------------------

console.log("4. Imprima no console a média do salário de todas as pessoas:");
console.log(`R$${(somaSalarios / data.length).toFixed(2).replace(',', '.')}`);

// -----------------------------------------------------------------------------------------

console.log("5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino");
const somaSalariosMasculinos = data.filter(pessoa => pessoa.sexo === "M")
  .reduce((acc, pessoa) => acc += pessoa.salario, 0);

console.log(`R$${somaSalariosMasculinos.toFixed(2).replace(',', '.')}`);

// -----------------------------------------------------------------------------------------

console.log("6. Imprima no console a média do salário de todas as pessoas do sexo Masculino");
console.log(`R$${(somaSalariosMasculinos / data.filter(pessoa => pessoa.sexo === "M").length)
  .toFixed(2).replace('.', ',')}`);

// -----------------------------------------------------------------------------------------

console.log(`7. Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso.`)

console.log(data.some(pessoa => pessoa.salario > 7000));

// -----------------------------------------------------------------------------------------

console.log(`8. Utilize a função findIndex, para descobrir a posição da pessoa de
nome 'Eva Trindade'.`);

console.log(data.findIndex(pessoa => pessoa.nome === 'Eva Trindade'));

// -----------------------------------------------------------------------------------------

console.log(`9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
sobrenome "Silva".`);

console.log(data.filter(pessoa => pessoa.nome.includes("Silva")));

// -----------------------------------------------------------------------------------------

console.log(`10. Imprima os nomes utilizando o MAP`);
console.log(data.map(pessoa => pessoa.nome));