// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

import { v4 as uuid } from 'uuid'

interface Produto {
  id?: string,
  nome: string,
  departamento: string,
  valor: number
}

interface ProdutoEditavel {
  nome?: string,
  departamento?: string,
  valor?: number
}

let produtos: Produto[] = [];

function cadastrar(...novosProdutos: Produto[]): void
{
  novosProdutos.forEach(produto => {
    produto['id'] = uuid();
  });

  produtos.push(...novosProdutos);
}

function listar(): Array<Produto>
{
  console.log(produtos);
  return produtos;
}

function excluir(id: string): void
{
  produtos = produtos.filter(product => product.id !== id);
}

function editar(id: string, produtoEditavel: ProdutoEditavel) {
  produtos.forEach(produto => {
    if(produto.id === id){
      produto.departamento = produtoEditavel.departamento || produto.departamento
      produto.valor = produtoEditavel.valor || produto.valor
      produto.nome = produtoEditavel.nome || produto.nome
      return;
    }
  });
}

export const gerenciadorDeProdutos = {
  cadastrar,
  listar,
  excluir, 
  editar
}