// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

console.log("======= Exercicio 5 =======");

export type Usuario = {
  name: string
  idade: number
  ocupacao: string
  salario?: number
}

const usuarios: Usuario[] = [];

const usuario1: Usuario = {
  name: "Bruno",
  idade: 26,
  ocupacao: 'Desenvolvedor',
}

const usuario2: Usuario = {
  name: "Douglas",
  idade: 89,
  ocupacao: 'Aposentado',
}

const usuario3: Usuario = {
  name: "Sandro",
  idade: 30,
  ocupacao: 'Jogador do Inter',
  salario: 10500
}

usuarios.push(usuario1, usuario2, usuario3);

export function listarUsuarios()
{
  usuarios.forEach(usuario => {
    console.log(`
     Nome: ${usuario.name}
     Idade: ${usuario.idade}
     Ocupação: ${usuario.ocupacao}
     Salário: ${usuario.salario || 'N/A'}
      `)
  });
}

