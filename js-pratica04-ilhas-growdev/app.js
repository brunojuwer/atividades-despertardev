let valor = Number(prompt("Digite o valor do saque:"));
let nota50 = 0;
let nota10 = 0;
let nota5 = 0;
let nota1 = 0;

while(valor !== 0) {
  if(valor / 50 >= 1) {
    nota50 = Math.floor(valor / 50);
    valor %= 50;
  } else if(valor / 10 >= 1) {
    nota10 = Math.floor(valor / 10);
    valor %= 10;
  } else if (valor / 5 >= 1) {
    nota5 = Math.floor(valor / 5);
    valor %= 5;
  } else {
    nota1 = Math.floor(valor / 1);
    valor %= 1;
  }
}

document.write(`GC$ 50,00 -> ${nota50} <br>`);
document.write(`GC$ 10,00 -> ${nota10} <br>`);
document.write(`GC$ 5,00 -> ${nota5} <br>`);
document.write(`GC$ 1,00 -> ${nota1} <br>`);