
const form = document.querySelector('form');

async function handleLogin(email, password) {

  try {

    const response = await axios.post("http://localhost:3000/users/login", {
      email,
      password
    });
    
    console.log(response);
    
    if(response.status === 200) {
      localStorage.setItem("user_data", JSON.stringify({...response.data}));
      location.href = "../index.html";
    }
    
  } catch (error) {
    if(error.response.status === 400) {
      alert("Falha nas credenciais");
      return;
    }
    
    if(error.response.status === 404) {
      alert("Usuário não encontrado!");
      return;
    }
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const email = e.target.email.value;
  const password = e.target.password.value;

  handleLogin(email, password);
})