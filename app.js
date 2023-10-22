const main = document.querySelector("#main");
const exerciciesList = document.querySelector(".exercicies-list");

function handleTerminalCommand(event) {
  event.preventDefault();
  const command = event.target.inputText.value.trim();

  if("ls" === command) {
    listAllExcercicies();
    createNewForm();
  }
  if("clear" === command) {
    clearTerminal()
  }
  if(command.startsWith("visit")) {
    visitPage(command.replace("visit ", ""));
  }
  if("help" === command) handleToggleHelp('block');

  event.target.reset();
  inputFocus();
}

function visitPage(name) {
  exercicies.forEach(ex => {
    if(ex.name === name.trim()) {
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
  exercicies.forEach(exercicie => {
    const li = document.createElement('li');
    li.innerHTML = `<li><a class="exercicie" href="${exercicie.link}" target="_blank">${exercicie.name}</a></li>`;
    ul.appendChild(li);
  })
  main.appendChild(ul);
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

function handleToggleHelp(display) {
  document.querySelector("#modal-overlay").style = `display: ${display}`;
  inputFocus();
}

window.addEventListener('keydown', (event) => {
  if(event.code === "Escape") handleToggleHelp("none");
});
