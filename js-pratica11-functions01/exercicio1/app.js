/*
  1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
    uma letra. Se a letra for A a função deve calcular a média aritmética,
    se for P, a média ponderada (peso: 5, 3 e 2).
*/

function mediaAluno(notas, metodo) {
  const peso = [5, 3, 2];
  const mediaPonderada = metodo === "P";
  const mediaAritimetica = metodo === "A";

  if(mediaPonderada) return notas.map((nota, index) => nota * peso[index])
      .reduce((acc, nota) => acc += nota) / 10;
  
  if(mediaAritimetica) return notas
      .reduce((acc, nota) => acc += nota) / notas.length;

  return null;
}

console.log(mediaAluno([9, 4, 5], "A"));