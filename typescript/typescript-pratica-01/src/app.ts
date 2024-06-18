import { calcularMedia } from "./ex1";
import { mediaPonderada } from "./ext2";
import { carteira } from "./ext3";
import { gerenciadorDeProdutos } from "./ext4";
import { listarUsuarios } from "./ext5";
import { listardiretores } from "./ext6";
import { listar } from "./ext7";

console.log(calcularMedia(5, 9));
console.log(mediaPonderada([
  {
    nota: 10,
    peso: 20,
  },
  {
    nota: 10,
    peso: 20,
  },
  {
    nota: 10,
    peso: 20,
  },
  {
    nota: 9,
    peso: 40,
  }
]));

console.log("Carteira");
console.log(carteira.saldo);
console.log(carteira.deposito(50.78));
console.log(carteira.saque(15));
console.log(carteira.deposito(250.90));
console.log(carteira.transacoes);

// ========== Exercício 4 ==========
console.log("\n======= Exercicio 4 =======");
gerenciadorDeProdutos.cadastrar(
  {
    valor: 50,
    nome: 'Arroz',
    departamento: 'Alimentos',
  },
  {
    valor: 20,
    nome: 'Café',
    departamento: 'Alimentos',
  },
  {
    valor: 1200,
    nome: 'Ryzen 7',
    departamento: 'Informática',
  },
);

const lista = gerenciadorDeProdutos.listar();

const id = `${lista[1].id}`;
console.log("\nApós exclusão:");
gerenciadorDeProdutos.excluir(id);
gerenciadorDeProdutos.listar();

const id2 = `${lista[2].id}`
console.log("\nApós edição:");
gerenciadorDeProdutos.editar(id2, {
  valor: 1999,
  // nome: 'Ryzen 9'
});
gerenciadorDeProdutos.listar();


// ========== Exercício 5 ==========
console.log("\n======= Exercicio 5 =======");
listarUsuarios();

// ========== Exercício 6 ==========
console.log("\n======= Exercicio 6 =======");
listardiretores();

// ========== Exercício 7 ==========

console.log("\n======= Exercicio 7 =======");

listar()