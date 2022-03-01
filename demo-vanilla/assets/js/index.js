const getDataUser = localStorage.getItem('dataUser')

if (!getDataUser) {
  const initialDataUser = []
  localStorage.setItem('dataUser', JSON.stringify(initialDataUser)) 
  // kenapa di buat JSON stringify ? karena default value dari local storage adalah string. 
  // jadi perlu di convert
}

const userLogin = localStorage.getItem('userLogin')

const elNavLogin = document.getElementById('nav-login')
const elNavRegister = document.getElementById('nav-register')
const elNavLogout = document.getElementById('nav-logout')

if (userLogin) {
  elNavLogin.classList.add("d-none");
  elNavRegister.classList.add("d-none");
  if (elNavLogout) {
    elNavLogout.classList.remove("d-none");
  }

  const currentWindow = window.location.pathname
  // console.log(currentWindow)
  if (currentWindow.includes('login') || currentWindow.includes('register')) {
    window.location.replace('./index.html')
  }
} else {
  elNavLogin.classList.remove("d-none");
  elNavRegister.classList.remove("d-none");
  if (elNavLogout) {
    elNavLogout.classList.add("d-none");
  }
}

function logout () {
  localStorage.removeItem('userLogin')
  elNavLogin.classList.remove("d-none");
  elNavRegister.classList.remove("d-none");
  if (elNavLogout) {
    elNavLogout.classList.add("d-none");
  }
}