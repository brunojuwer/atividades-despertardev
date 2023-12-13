
function changeBorder(e) {
  e.target.style = "border: 2px solid #1ed760"
}

function validateEmptyFields(userData) {
  let obj = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isSomeFieldEmpty: false
  }


  if(!userData.name) {
    obj.name = "name"
    obj.isSomeFieldEmpty = true
  }
  if(!userData.email) {
    obj.email = 'email'
    obj.isSomeFieldEmpty = true
  }
  if(!userData.password) {
    obj.password = 'password'
    obj.isSomeFieldEmpty = true
  }
  if(!userData.passwordConfirmation) {
    obj.passwordConfirmation = "passwordConfirmation"
    obj.isSomeFieldEmpty = true
  }

  return obj;
}

function validatePassword(password, passwordConfirmation) {
  return password === passwordConfirmation && password.length > 5;
}

async function createUser(userData) {
  try {
    const response = await axios
      .post("http://localhost:3000/users/signup", userData); 

    alert("Usuário cadastrado com sucesso!");
    location.href = "../login/login.html"
  } catch(error) {
    alert("Ocorreu um erro inesperado ",)
  }
}

document.querySelector(".container").addEventListener("submit", e => {
  e.preventDefault()
  const name = cadastroNomeCompleto.value;
  const email = cadastroEmail.value;
  const password = cadastroSenha.value;
  const passwordConfirmation = cadastroSenhaConfirmacao.value;

  const validatedFields = validateEmptyFields({
    name,
    email,
    password,
    passwordConfirmation
  });

  if(validatedFields.isSomeFieldEmpty) {

    if(validatedFields.name){
      cadastroNomeCompleto.style = "border: solid 2px #e74c3c"
    }
    if(validatedFields.email){
      cadastroEmail.style = "border: solid 2px #e74c3c"
    }
    if(validatedFields.password){
      cadastroSenha.style = "border: solid 2px #e74c3c"
    }
    if(validatedFields.passwordConfirmation){
      cadastroSenhaConfirmacao.style = "border: solid 2px #e74c3c"
    }
    return;
  }

  if(!validatePassword(password, passwordConfirmation)) {
    alert("Senha não passou na validação");
    return;
  }

  const userData = {
    name,
    email,
    password,
  }

  createUser(userData);
})