// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

type TipoTransacao = "ENTRADA" | "SAIDA";

interface Transacoes {
  id: string,
  tipo: TipoTransacao,
  valor: number,
}

interface Carteira {
  saldo: number,
  transacoes: Transacoes[],
  deposito: (valor: number) => void;
  saque: (valor: number) => void;
}

export const carteira : Carteira = {
  saldo: 100,
  transacoes: [],

  deposito(valor: number) {
    this.saldo += valor;
    this.transacoes.push({
      id: new Date().getMilliseconds().toString(),
      tipo: "ENTRADA",
      valor
    })
    return this.saldo;
  },
  saque(valor: number) {
    if(valor > this.saldo) {
      return "Saldo insuficiente";
    }
    this.saldo -= valor;
    this.transacoes.push({
      id: new Date().getMilliseconds().toString(),
      tipo: "SAIDA",
      valor
    })
    return this.saldo;
  }
}

