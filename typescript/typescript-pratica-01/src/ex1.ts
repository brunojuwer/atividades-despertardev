interface Media {
  media: number,
  aprovado: boolean
}


export function calcularMedia(num1: number, num2: number) : Media
{
  const media: number = (num1 + num2) / 2

    return {
      media,
      aprovado: media >= 6
    }
} 