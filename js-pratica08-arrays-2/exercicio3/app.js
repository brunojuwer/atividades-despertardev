/**
 3. Desenvolva um algoritmo que preenche um vetor com os 4
  primeiros números perfeitos.
 */

const perfectNumbers = [];
let sumMultiples = 0;

for (let i = 1; perfectNumbers.length !== 4; i++) {
    for (let j = i; j !== 0; j--) {
      if(i % j === 0 && i !== j) {
        sumMultiples += j;
      }
    }
    if(sumMultiples === i) {
      perfectNumbers.push(i);
    }
    sumMultiples = 0
}
document.write(`Os quatro primeiros números perfeitos são: [${perfectNumbers.join(", ")}]`);