const main = document.querySelector("#main");
const exerciciesList = document.querySelector(".exercicies-list");

function visitPage(number) {
  exercicies.forEach((ex, index) => {
    if(index + 1 == number.trim()) {
      window.open(ex.link, "_blank");
    }
  })
}

function clearTerminal() {
   main.innerHTML = `<form 
   class="prompt-form" 
   autocomplete="off"
   onsubmit="handleTerminalCommand(event)"
 >
   <p>➜</p>
   <input name="inputText" type="text" autofocus autocomplete="off">
 </form>`
}

function listAllExcercicies() {
  const ul = document.createElement('ul');
  ul.classList.add('exercicies-list')
  exercicies.forEach((exercicie, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<li><a class="exercicie" href="${exercicie.link}" target="_blank">${index + 1} - ${exercicie.name}</a></li>`;
    ul.appendChild(li);
  })
  main.appendChild(ul);
  createNewForm();
}

function createNewForm() {
  const newForm = document.createElement('form');
  newForm.classList.add('prompt-form');
  newForm.setAttribute('onsubmit', "handleTerminalCommand(event)");
  newForm.setAttribute('autocomplete', 'off')
  newForm.innerHTML = '<p>➜</p> <input name="inputText" type="text" autofocus autocomplete="off">';
  main.append(newForm);
  removeFormListner()
}

function removeFormListner() {
  const allForms = document.querySelectorAll(".prompt-form");

  allForms[allForms.length - 2].removeAttribute('onsubmit');
  allForms[allForms.length - 2].children[1].remove()
}

function inputFocus() {
  document.querySelector('input').focus();
}

let openModal = false;
function handleToggleHelp() {
  openModal = !openModal
  document.querySelector("#modal-overlay").style = openModal ? "display: block" : "display: none";
  inputFocus();
}

function handleTerminalCommand(event) {
  event.preventDefault();
  const command = event.target.inputText.value.trim();

  if(command.startsWith("visit")) {
    visitPage(command.replace("visit ", ""));
  }

  const commands = {
    "ls": listAllExcercicies,
    "clear": clearTerminal,
    "help": handleToggleHelp,
  }

  commands[command]();

  event.target.reset();
  inputFocus();
}

window.addEventListener('keydown', (event) => {
  if(event.code === "Escape"){
    openModal = true;
    handleToggleHelp();
  };
});