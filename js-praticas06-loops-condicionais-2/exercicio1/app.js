/**
 1. Crie uma variável para ler a idade de um motorista. Caso o
    motorista tenha idade maior ou igual a 18 anos imprime no console
    “Pode dirigir”, caso contrário imprima “Não pode dirigir”.
 */

const idade = Number(prompt("Digite a idade de um motorista: "));
console.log(idade >= 18 ? "Pode dirigir" : "Não pode dirigir");