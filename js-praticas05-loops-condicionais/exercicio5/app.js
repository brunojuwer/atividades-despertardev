/*
  5. Faça um algoritmo que pergunte a distância que um passageiro
    deseja percorrer em Km. Calcule o preço da passagem, cobrando
    R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
    longas.
*/

const distancia = Number(prompt("Digite a distância:"));

if(distancia <= 200) {
  document.write(`Valor da passagem é igual R$${(distancia * 0.5).toFixed(2)}`);
} else {
  document.write(`Valor da passagem é igual R$${(distancia * 0.45).toFixed(2)}`);
}