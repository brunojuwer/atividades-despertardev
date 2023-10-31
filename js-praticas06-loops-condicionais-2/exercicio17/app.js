/**
  17. Escreva um algoritmo que armazene o número total de eleitores de
  um município, o número de votos brancos, nulos e válidos. Calcular
  e escrever o percentual que cada um representa em relação ao
  total de eleitores. O algoritmo deve fazer uma validação para que as
  porcentagens dos votos armazenados (brancos, nulos e válidos)
  respeitem o limite do número total de eleitores, ou seja, garantir que
  a soma dos votos brancos, nulos e válidos não seja maior que o
  número total de eleitores.
 */

const voters = Number(prompt("Digite o total de eleitores da cidade: "))
const white = Number(prompt("Digite o total de votos em branco: "))
const nulls = Number(prompt("Digite o total de votos nulos: "))
const valid = voters - (white + nulls);
const total = white + nulls; 

if(total >= voters) {
  document.write("Votação não é válida pois os votos nulos e brancos ultrapassam ou se igualam ao total de eleitores <br>");
  document.write(`Total de nulos e brancos: ${total} <br>` );
  document.write("Total de eleitores: ", voters);

} else {

  const percentWhite = toPercent(white);
  const percentNulls = toPercent(nulls);
  const percentValid = toPercent(valid);
  
  function toPercent(value) {
    return (value / voters) * 100;
  }
  
  if(percentNulls + percentWhite >= percentValid){
    document.write("Votação não é válida pois os votos nulos e brancos ultrapassam ou se igualam ao total de válidos <br>");
    document.write(`Total de nulos: ${percentNulls.toFixed(2)}% <br>` );
    document.write(`Total de brancos: ${percentWhite.toFixed(2)}% <br>` );
    document.write(`Total de votos válidos: ${percentValid.toFixed(2)}%`);
  } else {
    document.write("Votação válida: <br>");
    document.write(`Percentual de votos em branco: ${percentWhite.toFixed(2)}% <br/>`);
    document.write(`Percentual de votos em nulos: ${percentNulls.toFixed(2)}% <br/>`);
    document.write(`Percentual de votos em válidos: ${percentValid.toFixed(2)}% <br/>`);
  }
}