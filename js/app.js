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

function registerAdminUser() {
  // Creamos un objeto que es un usuario administrador
  const adminUser = {
    name: "Julieta Correa",
    email: "mjulieta210@gmail.com",
    password: "12345",
    isAdmin: true,
  };

  // guardamos el usuario en localStorage
  localStorage.setItem("users", JSON.stringify([adminUser]));
}

//Ingreso como usario//

function loginUser() {
  if (loginInputEmail.value && loginInputPassword.value) {
    const raw = localStorage.getItem("users");
    const localData = JSON.parse(raw);

    const userFound = localData.find(
      (user) => user.email === loginInputEmail.value
    );

    if (userFound) {
      if (userFound.password === loginInputPassword.value) {
        if (userFound.isAdmin === true) {
          showElement(userType);
          userType.innerHTML = "Administrador";

          let myModalEl = document.getElementById("login-modal");
          let myModal = bootstrap.Modal.getInstance(myModalEl); // Retorna una instancia del modal

          myModal.hide();

          myModalEl.classList.remove("show");
          document.body.classList.remove("modal-open");

          // Elimina el elemento del backdrop del DOM
          var backdrop = document.querySelector(".modal-backdrop");
          if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
            document.body.classList.remove("modal-open");
            // Elimina el estilo de overflow
            document.body.style.overflow = "";
          }

          console.log("llega hasta aqui");
        }
      } else {
        alert("Usuario o password incorrecto");
      }
    } else {
      alert("Usuario o password incorrecto");
    }
  } else {
    alert("Por favor ingresa un usuario valido!");
  }
}
