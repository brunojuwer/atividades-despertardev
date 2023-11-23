const produtos = [
  {
    id: 1,
    nome: "Pão de queijo",
    estoque: 12,
    preco: 5.00
  },
  {
    id: 2,
    nome: "Cacetinho",
    estoque: 100,
    preco: 0.50
  },
  {
    id: 3,
    nome: "Baguete",
    estoque: 100,
    preco: 1.50
  },
]

const pedidos = [
  {
    nome: "Cacetinho",
    estoque: 77,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1700593910935 // 21/nov
  },
  {
    nome: "Baguete",
    estoque: 30,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1688958000000 // 10/julho
  },
  {
    nome: "Pão",
    estoque: 30,
    preco: 11.5,
    quantidade: 23,
    dataDoPedido: 1698634800000 // 30/out
  }
];

let produtoIdSequence = 3;


const listarProdutos = () => {
    const ordemPor = prompt("Listar por preço ou ordem alfabética? \nP para preço e A para alfabética ou Enter normal: ");
  
    if(!ordemPor) {
      return produtos.reduce((acc, item) => {
          return acc + `ID: ${item.id} | NOME: ${item.nome} | ESTOQUE: ${item.estoque} | PREÇO: ${item.preco} \n`
      }, "Listagem simplificada \n");
    }

    if(ordemPor.toUpperCase() === "A") {
        return [...produtos]
          .sort((a, b) => (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0))
          .reduce((acc, item) => {
          return acc + `ID: ${item.id} | NOME: ${item.nome} | ESTOQUE: ${item.estoque} | PREÇO: ${item.preco} \n`
      }, "Listagem por ordem alfabética: \n");
    }

    if(ordemPor.toUpperCase() === "P") {
      return [...produtos]
        .sort((a, b) => a.preco - b.preco)
        .reduce((acc, item) => {
        return acc + `ID: ${item.id} | NOME: ${item.nome} | ESTOQUE: ${item.estoque} | PREÇO: ${item.preco} \n`
    }, "Listagem por ordem de preço: \n");
    }

    return "Opção inválida!";    
}


const cadastrarProduto = () => {
  const nome = prompt("Digite o nome do produto: ");
  const preco = Number(prompt("Digite o preço do produto: "));
  const estoque = Number(prompt("Digite o estoque do produto: "));

  produtos.push({
    id: ++produtoIdSequence,
    nome,
    estoque,
    preco
  })
  return "Produto adicionado com sucesso!"
}

const editarProduto = () => {
  const idAtt = Number(prompt("Digite o id do produto a ser atualizado: "));
  const index = produtos.findIndex(({id}) => id === idAtt)

  if(index === -1) {
    return `Produto com id ${idAtt} não localizado!`
  }

  const nome = prompt("Digite o novo nome do produto: ");
  const estoque = Number(prompt("Digite o novo estoque do produto: "));
  const preco = Number(prompt("Digite o novo preço do produto: "));

  if(estoque < 1) return "Estoque não pode ser zerado";

  produtos[index].nome = nome;
  produtos[index].estoque = estoque;
  produtos[index].preco = preco;
  
  return "Produto atualizado com sucesso!";
}

const removerProduto = () => {
  const idAtt = Number(prompt("Digite o id do produto a ser removido: "));
  const index = produtos.findIndex(({id}) => id === idAtt)

  if(index === -1) {
    return `Produto com id ${idAtt} não localizado!`
  }

  produtos.splice(index, 1);
  return "Produto removido com sucesso!";
}

const realizarPedido = () => {
  console.log(listarProdutos());

  const nomeProduto = prompt("Digite o nome do produto requerido: ");
  const index = produtos.findIndex(({nome}) => nome === nomeProduto);

  if(index === -1) {
    return `Produto com nome ${nomeProduto} não localizado!`;
  }

  const quantidade = Number(prompt("Digite a quantidade do produto requerido: "));

  produtos[index].estoque -= quantidade;

  const prod = {...produtos[index], quantidade, dataDoPedido: Date.now()};
  prod.preco *= quantidade;
  pedidos.push(prod);

  return pedidos.reduce((acc, item) => {
    return acc + `NOME: ${item.nome} | ESTOQUE: ${item.estoque} | PREÇO: ${item.preco} | QUANTIDADE: ${item.quantidade} \n`
  }, "Hitórico de pedidos: \n");
}

const somarValorEstoque = () => {
  return produtos.reduce((acc, item) => {
    return acc + `ID: ${item.id} | NOME: ${item.nome} | ESTOQUE: ${item.estoque} | PREÇO UNITÁRIO: ${item.preco} | VALOR TOTAL ESTOQUE: R$${item.preco * item.estoque} \n`
  }, "Preço de venda do seu estoque \n")
}

const gerarRelatorio = () => {

  const aPartirDia = prompt("Digite a partir de que dia: ");
  const aPartirMes = prompt("Digite a partir de que mês: ");
  const aPartirAno = prompt("Digite a partir de que ano: ");

  const ateDia = prompt("Digite até de que dia: ");
  const ateMes = prompt("Digite até de que mês: ");
  const ateAno = prompt("Digite até de que ano: ");

  const timestampAPartir = new Date(`${aPartirMes}/${aPartirDia}/${aPartirAno}`).getTime();
  const timestampAte = new Date(`${ateMes}/${ateDia}/${ateAno}`).getTime();

  const pedidosFiltradosPorData = pedidos.filter(item => {
     return item.dataDoPedido >= timestampAPartir && item.dataDoPedido <= timestampAte;
  })

  const sum = pedidosFiltradosPorData.reduce((acc, item) => {
    return acc += item.preco
  }, 0)

  return `Valor faturamento R$${sum} \nQuantidade de pedidos ${pedidosFiltradosPorData.length}`;
}


let continuar = false;

const sairDoSistema = () => {
  continuar = false;
  return "Saída realizada com sucesso!"
}

const iniciarSistema = () => {
  continuar = true;
  while(continuar) {

    const opcao = prompt(`
    1- Listar produto:
    2- Cadastrar produto:
    3- Atualizar produto:
    4- Deletar produto:
    5- Fazer um pedido:
    6- Somar estoque produtos:
    7- Gerar relatório:
    8- Sair do sistema:

    Digite uma opção:

  `);

  console.log(opcao)
    const opcoes = {
      "1": listarProdutos,
      "2": cadastrarProduto,
      "3": editarProduto,
      "4": removerProduto,
      "5": realizarPedido,
      "6": somarValorEstoque,
      "7": gerarRelatorio,
      "8": sairDoSistema,
      null: sairDoSistema

    }
    alert(opcoes[opcao] ? opcoes[opcao]() : "Opção inválida")
  }
}