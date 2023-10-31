/**
  18. Uma loja de eletrodomésticos estabeleceu as seguintes
  modalidades de pagamento para a venda de suas mercadorias:

  Escreva um algoritmo que armazene o preço de tabela e o número
  de vezes em que o pagamento será feito. Calcule o valor de cada
  parcela e o preço total da compra e imprima no console.
 */

const valorCompra = Number(prompt("Digite o valor de sua compra: "));
const parcelas = Number(prompt("Digite em quantas vezes gostaria de fazer o pagamento, até 15X: "));

const descontoUmaParcela = 2.5 / 100;
const jurosParcelasDe6até10Vezes = 6 / 100;
const jurosParcelasDe11até15Vezes = 13 / 100;

if(parcelas === 1) {
  console.log("Valor final da compra: R$" + (valorCompra - (valorCompra * descontoUmaParcela)).toFixed(2));
} else if(parcelas >= 2 && parcelas <= 5) {
    console.log("Valor final da compra: R$" + valorCompra.toFixed(2));
    console.log(`Valor final das parcelas em ${parcelas}X: R$${(valorCompra / parcelas).toFixed(2)}` );
} else if(parcelas >= 6 && parcelas <= 10) {
    const valorComJuros = valorCompra + (valorCompra * jurosParcelasDe6até10Vezes);
    console.log("Valor final da compra: R$" + valorComJuros.toFixed(2));
    console.log(`Valor final das parcelas em ${parcelas}X: R$${(valorComJuros / parcelas).toFixed(2)}` );
} else if(parcelas >= 11 && parcelas <= 15) {
    const valorComJuros = valorCompra + (valorCompra * jurosParcelasDe11até15Vezes);
    console.log("Valor final da compra: R$" + valorComJuros.toFixed(2));
    console.log(`Valor final das parcelas em ${parcelas}X: R$${(valorComJuros / parcelas).toFixed(2)}` );
} else {
    console.log("Opção inválida!");
}
