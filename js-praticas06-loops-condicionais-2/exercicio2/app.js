/**
  2. Para o mesmo exercício acima insira mais uma variável a
    condicional, além de saber se o motorista tem 18 anos ou mais,
    temos que saber também se ele é habilitado para dirigir. Caso ele
    tenha idade maior ou igual a 18 anos e possua habilitação, insira no
    html “Pode dirigir” caso contrário imprima “Não pode dirigir”.
 */


const idade = Number(prompt("Digite a idade de um motorista: "));

if(idade >= 18) {
  const temHabilitacao = prompt("Você tem habilitação? S/N").toLowerCase();
  document.write(temHabilitacao === "s" ? "Pode dirigir" : "Não pode dirigir");
} else {
  document.write("Não pode dirigir");
}