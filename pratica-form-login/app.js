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
    await axios.post("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes", {
      title: recadoTitle.value,
      description: recadoDescription.value,
    });
  location.reload();
}

async function updateRecado(id, idTitle, idDescription) {
    await axios.put(`https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/notes/${id}`, {
      title: fields.title === "" ? document.getElementById(idTitle).value : fields.title,
      description: fields.description === "" ? document.getElementById(idDescription).value : fields.description
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
        <input disabled id="${element.id}" class="cardTitle" onkeyup="updateTitle(${element.id})" value="${element.title}">
        <i class="ph ph-pen" onclick="editField(${element.id})"></i>
      </div>
      <div class="descriptionContainer">
        <input disabled id="${element.id + "1"}" class="cardDescription" onkeyup="updateDescription(${element.id + "1"})" value="${element.description}">
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
  document.getElementById(id).classList.add("input-border-focus");
}

function handleLogOut() {
  location.href = './login/login.html';
}