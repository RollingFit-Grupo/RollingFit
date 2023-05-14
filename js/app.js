const loginForm = document.getElementById("form-login");
const registerForm = document.getElementById("form-register");

const loginButton = document.getElementById("login-button");
const registerButton = document.getElementById("register-button");

const showLoginButton = document.getElementById("show-login-button");
const showRegisterButton = document.getElementById("show-register-button");

const modalTitle = document.getElementById("auth-modal-title");

const registerInputName = document.getElementById("register-name");
const registerInputEmail = document.getElementById("register-email");
const registerInputPassword = document.getElementById("register-password");

const loginInputEmail = document.getElementById("login-email");
const loginInputPassword = document.getElementById("login-password");

const userType = document.getElementById("user-type");

registerAdminUser();

function hideElement(element) {
  element.classList.add("d-none");
}

function showElement(element) {
  element.classList.remove("d-none");
}

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