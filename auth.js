<script>
// ====== GANTI LOGIN DEMO DI SINI ======
const DEMO_USER = "admin";
const DEMO_PASS = "1234";

function login(){
  const u = document.getElementById("user").value.trim();
  const p = document.getElementById("pass").value.trim();
  if (u === DEMO_USER && p === DEMO_PASS) {
    localStorage.setItem("isLogin", "1");
    location.href = "index.html";
  } else {
    const err = document.getElementById("err");
    if (err) err.style.display = "block";
  }
}

function guard(){
  if (localStorage.getItem("isLogin") !== "1") {
    location.href = "login.html";
  }
}

function logout(){
  localStorage.removeItem("isLogin");
  location.href = "login.html";
}
</script>
