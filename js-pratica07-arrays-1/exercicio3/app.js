/*
  3. Utilizar os métodos push, pop, unshift e shift para manipular um
    array
    a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
    de sua escolha
    b. Utilize o método push para adicionar uma fruta no final do
    array
    c. Utilize o método pop para remover a última fruta do array
    d. Utilize o método unshift para adicionar uma fruta no início do
    array
    e. Utilize o método shift para remover a primeira fruta do array
    f. Exiba o array resultante na tela
*/

const frutas = ["Maçã", "Kiwi", "Laranja"];

document.write(`Valor inicial do array = [${frutas}] <br>`);
document.write("<br>");

frutas.push("Banana");
document.write(`Array depois do push("Banana") = [${frutas}] <br>`);
document.write("<br>");

frutas.pop();
document.write(`Array depois do pop() = [${frutas}] <br>`);
document.write("<br>");

frutas.unshift("Uva");
document.write(`Array depois do unshift("Uva") = [${frutas}] <br>`);
document.write("<br>");

frutas.shift();
document.write(`Array depois do shift() = [${frutas}] <br>`);