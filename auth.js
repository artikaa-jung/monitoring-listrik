const USERNAME = "admin";
const PASSWORD = "12345";

function login(){
  const user = document.getElementById("user")?.value.trim();
  const pass = document.getElementById("pass")?.value.trim();
  const err  = document.getElementById("err");

  if(!user || !pass){
    if(err){
      err.textContent = "Username dan password wajib diisi";
      err.style.display = "block";
    }
    return;
  }

  if(user === USERNAME && pass === PASSWORD){
    sessionStorage.setItem("login", "true");
    window.location.href = "index.html";
  } else {
    if(err){
      err.textContent = "Username atau password salah";
      err.style.display = "block";
    }
  }
}

function guard(){
  if(sessionStorage.getItem("login") !== "true"){
    window.location.href = "login.html";
  }
}

function logout(){
  sessionStorage.removeItem("login");
  window.location.href = "login.html";
}
