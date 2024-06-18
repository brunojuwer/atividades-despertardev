// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

import { Usuario } from './ext5';
import { Diretor } from './ext6';

type Pessoa = Usuario | Diretor;

const pessoas: Pessoa[] = [];

const pessoa1: Pessoa = {
  name: 'Bruno',
  idade: 26,
  ocupacao: 'Colono',
  salario: 2000
}

const pessoa2: Pessoa = {
  name: 'Bruna',
  idade: 26,
  comissao: 3,
  salario: 2000
}

const pessoa3: Pessoa = {
  name: 'Pedro',
  idade: 40,
  ocupacao: 'Engenheiro',
}

pessoas.push(pessoa1, pessoa2, pessoa3);

export function listar() {
  pessoas.forEach((pessoa: any) => {
    console.log(`
     Nome: ${pessoa.name}
     Idade: ${pessoa.idade}
     ${pessoa.ocupacao ? `Ocupação: ${pessoa.ocupacao}` : `Commissão: ${pessoa.comissao}`}
     Salário: ${pessoa.salario || 'N/A'}
      `)
  });  
}
