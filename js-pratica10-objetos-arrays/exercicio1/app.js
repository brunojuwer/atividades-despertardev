/*
  1. Considere o seguinte array:
    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
    1290.00, 15000.00];

    a. Imprima no console o índice do primeiro salário maior que
    7.500 utilizando o findIndex
    b. Crie uma nova lista filtrada com os salários que são maior que
    8.000 utilizando o filter
*/

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

console.log(salarios.findIndex(num => num > 7500));