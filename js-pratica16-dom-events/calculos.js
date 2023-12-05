/* Desenvolva aqui a rotina */

// Exercicio 2
valor_base.addEventListener('keyup', (event) => {
  calcReceita(event.target.value)
})

valor_transporte.addEventListener('keyup', event => {
  calcReceita(valor_base.value, event.target.value)
})

valor_alimentacao.addEventListener('keyup', event => {
  calcReceita(valor_base.value, valor_transporte.value, event.target.value);
});

valor_automovel.addEventListener('keyup', event => {
  calcDescontos(event.target.value);
});

faltas.addEventListener('keyup', event => {
  calcDescontos(valor_automovel.value, event.target.value);
});

function calcReceita(base = 0, transporte = 0, alimentacao = 0) {
   const newBase = Number(base);
   const newTransporte = Number(transporte);
   const newAlimentacao = Number(alimentacao);
   valor_receita.value = newBase + newTransporte + newAlimentacao;
   calcTotal(valor_receita.value)
}

function calcDescontos(automovel = 0, _faltas = 0) {
  const newAutomovel = Number(automovel);
  const newFaltas = Number(_faltas);
  valor_descontos.value = newAutomovel + newFaltas;
  calcTotal(valor_receita.value, valor_descontos.value)
}

function calcTotal(receita = 0, descontos = 0) {
  valor_total.value = Number(receita - descontos);
}

// Exercicio 1
btn_calcular.addEventListener('click', e => {
  calcReceita(valor_base.value, valor_transporte.value, valor_alimentacao.value);
  calcDescontos(valor_automovel.value, faltas.value);
  calcTotal(valor_receita.value, valor_descontos.value);
})