const loggedUserName = JSON.parse(localStorage.getItem('user_data'));

console.log(loggedUserName);

if(!loggedUserName) {
  console.log("asdsad");
  location.href = "./login/login.html";
}

userName.innerText = loggedUserName.name;

function handleLogOut() {
  localStorage.removeItem("user_data");
  location.href = './login/login.html';
}