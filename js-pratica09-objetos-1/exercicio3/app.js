/**
  3. Crie um objeto para colocar nome e duas notas. Atribua nome e
    duas notas para o primeiro objeto, que será nosso primeiro aluno.
    Agora crie mais um objeto para colocar informações do nosso
    segundo aluno. Mostre as informações de cada aluno no console.
    Mostre também a média do primeiro aluno e a média do segundo
    aluno. Por fim mostre a média desta turma de 2 alunos.
 */

const aluno1 = {
  nome: "Bruno",
  nota1: 7,
  nota2: 9,
}

const aluno2 = {
  nome: "Andrei",
  nota1: 10,
  nota2: 9,
}

console.log(aluno1)
console.log(aluno2)

const mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;
const mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2;

console.log("Média aluno 1: ", mediaAluno1);
console.log("Média aluno 2: ", mediaAluno2);
console.log("Média da turma: ", (mediaAluno1 + mediaAluno2) / 2);