/*
  4. Crie uma função que recebe por parâmetro o tempo de duração de
    uma fábrica expressa em segundos e retorna esse tempo em horas,
    minutos e segundos.
    Ex:
      Entrada: 3672
      Saída: 1:1:12
*/

function timeConverter(param) {
  const hours = Math.floor(param / 3600);
  const minutes = Math.floor((param % 3600) / 60);
  const seconds = param % 60;

  return hours + ':' + minutes + ':' + seconds;
}

console.log(timeConverter(3672));