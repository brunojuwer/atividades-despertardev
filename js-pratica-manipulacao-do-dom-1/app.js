const button = document.querySelector('button');
const p = document.querySelector('p')

button.addEventListener('click', () => {
  const myName = prompt("Digite seu nome:")
  p.innerText = `E aí ${myName}! Você está deixando o seu site dinâmico.`
})

// Exercicio 2
const counter = document.querySelector("#counter");

let count = 0;

function increment() {
  counter.innerText = ++count;
}

function resetCounter() {
  count = 0
  counter.innerText = count;
}