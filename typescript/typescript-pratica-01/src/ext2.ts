// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface Nota {
  nota: number,
  peso: number
}

interface Media {
  media: number,
  aprovado: boolean
}


export function mediaPonderada(notas: Nota[]): Media
{
  const media: number = notas.reduce((acc, nota) => {
    return acc += nota.nota * (nota.peso / 100);
  } , 0);

  return {
    media,
    aprovado: media >= 6
  }
}