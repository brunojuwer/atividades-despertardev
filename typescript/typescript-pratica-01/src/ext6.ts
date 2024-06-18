// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”




export type Diretor = {
  name: string
  idade: number
  comissao: number
  salario?: number
}

const diretores: Diretor[] = [];

const diretor1: Diretor = {
  name: "Bruno",
  idade: 26,
  comissao: 3,
}

const diretor2: Diretor = {
  name: "Douglas",
  idade: 89,
  comissao: 2,
}

const diretor3: Diretor = {
  name: "Sandro",
  idade: 30,
  comissao: 5,
  salario: 10500
}

diretores.push(diretor1, diretor2, diretor3);

export function listardiretores()
{
  diretores.forEach(diretor => {
    console.log(`
     Nome: ${diretor.name}
     Idade: ${diretor.idade}
     Comissão: ${diretor.comissao}
     Salário: ${diretor.salario || 'N/A'}
      `)
  });
}

