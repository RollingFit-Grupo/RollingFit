import {
  getLocalStorage,
  setLocalStorage,
  hideElement,
  showElement,
  closeModal,
  isValidEmail
} from "./utils.js";

// Forms

const loginForm = document.getElementById("form-login");
const registerForm = document.getElementById("form-register");

// Inputs

const loginInputEmail = document.getElementById("login-email");
const loginInputPassword = document.getElementById("login-password");

// Buttons

const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");
const initSessionButton = document.getElementById("init-session-button");
const closeSessionButton = document.getElementById("close-session-button");
const showLoginButton = document.getElementById("show-login-button");
const showRegisterButton = document.getElementById("show-register-button");

// Others

const modalTitle = document.getElementById("auth-modal-title");
const userType = document.getElementById("user-type");
const modalSuccess= Swal.mixin({
  customClass: {
      title:"text-success-emphasis",
      closeButton: 'text-danger',
      confirmButton: 'btn btn-success mx-2'
  },
  buttonsStyling: false,
  showCloseButton: true,
  color:"var(--bs-success-text-emphasis)",
  background: "var(--bs-success-bg-subtle)",
  iconColor:"var(--bs-success-text-emphasis)",
})
const modalWarning= Swal.mixin({
  customClass: {
      title:"text-info-emphasis",
      closeButton: 'text-danger',
      confirmButton: 'btn btn-success mx-2'
  },
  buttonsStyling: false,
  showCloseButton: true,
  color:"var(--bs-danger-text-emphasis)",
  background: "var(--bs-danger-bg-subtle)",
  iconColor:"var(--bs-info-text-emphasis)",
})
// Class AdminUser

class AdminUser {
  constructor(name, email, password, admin) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = true || admin;
  }
}

// Initial functions

registerAdminUser();
checkUserLogged();

// Events listeners

loginButton.addEventListener("click", loginUser);
closeSessionButton.addEventListener("click", closeSession);
showRegisterButton.addEventListener("click", showRegisterForm);
showLoginButton.addEventListener("click", showLoginForm);

function changeModalTitle(title) {
  modalTitle.innerHTML = title;
}

function showRegisterForm() {
  hideElement(loginForm);
  hideElement(loginButton);

  showElement(registerForm);
  showElement(registerButton);

  showElement(showLoginButton);
  hideElement(showRegisterButton);

  changeModalTitle("Registrarme");
}

function showLoginForm() {
  showElement(loginForm);
  showElement(loginButton);

  hideElement(registerForm);
  hideElement(registerButton);

  hideElement(showLoginButton);
  showElement(showRegisterButton);

  changeModalTitle("Iniciar sesion");
}

function registerAdminUser() {
  // Creamos un objeto que es un usuario administrador instanciando la clase AdminUser
  const adminUser = new AdminUser(
    "Julieta Correa",
    "mjulieta210@gmail.com",
    "12345"
  );
  const usuario = new AdminUser(
    "Maximiliano",
    "maxivega1@gmail.com",
    "123456",
    false
  );
  // guardamos el usuario en localStorage
  setLocalStorage("users", [adminUser, usuario]);
}

//Ingreso como usario//

function loginUser() {
  const email = loginInputEmail.value;
  const password = loginInputPassword.value;


  if (!email || !password) {
    modalWarning.fire(
      "Completa todos los campos",
      "Debes completar todos los campos para iniciar sesion",
      "info"
    );
    return;
  }

  if (isValidEmail(email) === false ){
    modalWarning.fire(
    "Formato de mail incorrecto",
    "El formato correcto es: mail@mail.com",
    "error"
  );
  return

  }


  const raw = getLocalStorage("users");
  const users = JSON.parse(raw);
  const userFound = users.find((user) => user.email === email);

  if (!userFound) {
    modalWarning.fire(
      "Credenciales incorrectas",
      "Usuario o contraseña incorrectas",
      "error"
    );
    // Swal.fire(
    //   "Credenciales incorrectas",
    //   "Usuario o contraseña incorrectas",
    //   "error"
    // );

    return;
  }

  if (userFound.password !== password) {
    modalWarning.fire(
      "Credenciales incorrectas",
      "Usuario o contraseña incorrectas",
      "error"
    );

    return;
  }

  if (userFound.isAdmin === true) {
    showElement(userType);
    userType.innerHTML = "Administrador";
    sessionStorage.setItem("user-session", JSON.stringify(userFound));
    closeModal("login-modal");
    hideElement(initSessionButton);
    showElement(closeSessionButton);
    modalSuccess.fire(
      "Inicio de sesion exitoso",
      "Te logueaste exitosamente como administrador",
      "success"
    );
  }
}

// Retorna una instancia del modal

function checkUserLogged() {
  const raw = sessionStorage.getItem("user-session");
  const userLogged = JSON.parse(raw);

  if (userLogged) {
    showElement(userType);
    userType.innerHTML = "Administrador";
    hideElement(initSessionButton);
    showElement(closeSessionButton);
  } else {
    hideElement(userType);
    hideElement(closeSessionButton);
    showElement(initSessionButton);
  }
}

function closeSession() {
  sessionStorage.removeItem("user-session");
  checkUserLogged();
  modalSuccess.fire(
    "Cierre de sesion exitoso",
    "La sesión se cerró exitosamente",
    "success"
  );
}
