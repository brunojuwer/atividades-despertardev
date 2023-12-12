async function getAllRecados() {
  try {
    return await axios.get("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes");
  } catch(error) {
    alert("Ocorreu um erro na requisição da API");
  }
}

let fields = {
  title: "",
  description: ""
}

document.querySelector("form").addEventListener('submit', e => {
  e.preventDefault()
  createRecado()
})

async function createRecado() {
  if(!recadoTitle.value) {
    alert("Titulo não pode estar em branco");
    return;
  }
  if(!recadoDescription.value) {
    alert("Descrição não pode estar em branco");
    return;
  }

  await axios.post("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes", {
    title: recadoTitle.value,
    description: recadoDescription.value,
  });
  location.reload();
}

async function updateRecado(id, idTitle, idDescription) {
  const title = document.getElementById(idTitle).value;
  const description = document.getElementById(idDescription).value

  if(!title) {
    alert("Titulo não pode estar em branco");
    return;
  }
  if(!description) {
    alert("Descrição não pode estar em branco");
    return;
  }

  await axios.put(`https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes/${id}`, {
    title: fields.title === "" ? title : fields.title,
    description: fields.description === "" ? description : fields.description
  });

  fields.title = ""
  fields.description = ""

  location.reload();
}

async function deleteRecado(id){
  const response = await axios
    .delete(`https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes/${id}`);

    if(response.status === 200) {
      alert("Recado apagado com sucesso!");
      location.reload()
    }
}

const cardContainer = document.querySelector(".messages-list");

async function addCardsToContainer() {
  const recados = (await getAllRecados()).data

  if(recados.length === 0) {
    cardContainer.innerHTML = `
    <div class="card">
        <h2 class="card-title" style="text-align:center;">Você não possiu nenhum recado!</h2>
    </div>
    `
    return;
  }

  recados.forEach(element => {
    cardContainer.innerHTML += `
    <div class="card">
      <div class="titleContainer">
        <input disabled onblur="removeFocus(${element.id})" id="${element.id}" class="cardTitle" onkeyup="updateTitle(${element.id})" value="${element.title}">
        <i class="ph ph-pen" onclick="editField(${element.id})"></i>
      </div>
      <div class="descriptionContainer">
        <input disabled onblur="removeFocus(${element.id + '1'})" id="${element.id + "1"}" class="cardDescription" onkeyup="updateDescription(${element.id + "1"})" value="${element.description}">
        <i class="ph ph-pen" onclick="editField(${element.id + "1"})"></i>
      </div>
      <div class="buttonContainer">
        <button id="deleteButton" onclick="deleteRecado(${element.id})">Deletar</button>
        <button id="updateButton" onclick="updateRecado(${element.id}, ${element.id}, ${element.id + "1"})">Atualizar</button>
      </div>
    </div>
    `;
  });
}

addCardsToContainer()

function updateDescription(id) {
  fields.description = document.getElementById(id).value
}

function updateTitle(id) {
  fields.title = document.getElementById(id).value
}

function openModal() {
  modalContainer.classList.add("modal-open");
}

function closeModal() {
  modalContainer.classList.remove("modal-open");
}

function editField(id) {
  document.getElementById(id).removeAttribute("disabled");
  document.getElementById(id).focus();
  let val = document.getElementById(id).value
  document.getElementById(id).value = "";
  document.getElementById(id).value = val;
  document.getElementById(id).classList.add("input-border-focus");
}

function removeFocus(id) {
  document.getElementById(id).setAttribute("disabled", "");
  document.getElementById(id).classList.remove("input-border-focus");
}