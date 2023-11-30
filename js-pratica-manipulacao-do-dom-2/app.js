const cards = document.querySelectorAll(".card");

cards.forEach(elemet => {
  elemet.style = 'background-color: #E16E0E';
  elemet.children[0].innerHTML = "Meu Card";
  elemet.children[0].style = "color: #2b385b; margin-top: 1rem; margin-bottom: 2rem";
});

const descricoesCard = document.querySelectorAll(".descricao-card");

descricoesCard.forEach(elemet => {
  elemet.style = "color: white; margin-bottom: 2rem"
  elemet.innerText = "Descrição alterada pelo JavaScript"
})

const botoesEditar = document.querySelectorAll(".botao-editar");
const botoesApagar = document.querySelectorAll(".botao-apagar");

botoesEditar.forEach(elemet => {
  elemet.style = `padding: 0.75rem;
  border-radius: 10px;
  border: none;
  font-size: 0.875rem;
  color: white;
  background-color: green;`
  elemet.setAttribute("onClick", "editarCard()");
})

botoesApagar.forEach(elemet => {
  elemet.style = `padding: 0.75rem;
  border-radius: 10px;
  border: none;
  font-size: 0.875rem;
  color: white;
  background-color: red;`
  elemet.setAttribute("onClick", "apagarCard()");
});

function editarCard() {
  alert("Clicou em Editar!");
}

function apagarCard() {
  const option = confirm("Deseja apagar o card?");
  if(option) {
    alert("Confirmado!");
    return;
  }
  alert("Cancelado!");
}