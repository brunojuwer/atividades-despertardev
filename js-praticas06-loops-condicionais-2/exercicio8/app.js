/**
  8. Crie uma variável para armazenar o salário do usuário e atribua um
    valor a essa variável. Crie a validação necessária:
    - Caso o salário seja MENOR que R$ 1.903,98, insira no html
    "ISENTO DE IR";
    - caso contrário insira "TRIBUTADO NO IR".
 */
const salario = Number(prompt("Qual o seu salário?").replace(",", "."));

if(salario < 1903.98) {
  document.write(`ISENTO DE IR R$${salario.toFixed(2).replace(".", ",")}`);
} else {
  document.write(`TRIBUTADO NO IR R$${salario.toFixed(2).replace(".", ",")}`);
}