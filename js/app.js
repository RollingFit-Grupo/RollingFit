import {
  getLocalStorage,
  setLocalStorage,
  ocultarElemento,
  mostrarElemento,
  closeModal,
} from "./utils.js";
import { 
  validarEmail,
} from "./helpers.js";

// Forms

const accederForm = document.getElementById("form-acceder");
const registroForm = document.getElementById("form-registro");

// Inputs

const accederInputEmail = document.getElementById("acceder-email");
const accederInputPassword = document.getElementById("acceder-password");

// Buttons

const accederButton = document.getElementById("acceder-button");
const registroButton = document.getElementById("registro-button");
const initSessionButton = document.getElementById("init-session-button");
const closeSessionButton = document.getElementById("close-session-button");
const showAccederButton = document.getElementById("show-acceder-button");
const showRegistroButton = document.getElementById("show-registro-button");

// Others

// const resumen = resumenValidacion(servicioNombre.value,profesor.value,descripcion.value,socialProf.value,tiempo.value,precio.value,imagen.value,revision.value,descripcionProfesional.value);
//   mostrarMensaje(resumen);
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

class Usuario {
  #nombre;
  #email;
  #contrasenia;
  #admin;

  constructor(nombre, email, contrasenia, admin) {
    this.#nombre = nombre;
    this.#email = email;
    this.#contrasenia = contrasenia;
    this.#admin = admin;
  }

  set nombre(nuevonombre) {
    this.#nombre = nuevonombre;
  }

  get nombre() {
    return this.#nombre;
  }

  set email(nuevoEmail) {
    this.#email = nuevoEmail;
  }

  get email() {
    return this.#email;
  }

  set contrasenia(nuevocontrasenia) {
    this.#contrasenia = nuevocontrasenia;
  }

  get contrasenia() {
    return this.#contrasenia;
  }

  set isAdmin(nuevoAdmin) {
    this.#admin = nuevoAdmin;
  }

  get isAdmin() {
    return this.#admin;
  }
  toJSON() {
    return {
      nombre: this.nombre,
      email: this.email,
      contrasenia: this.contrasenia,
      isAdmin: this.isAdmin
};
  }
}
// Initial functions

registroAdminUser();
checkUsuarioIngresado();

// Events listeners

accederButton.addEventListener("click", accederUser);
closeSessionButton.addEventListener("click", closeSession);
showRegistroButton.addEventListener("click", showRegistroForm);
showAccederButton.addEventListener("click", showAccederForm);

function changeModalTitle(title) {
  modalTitle.innerHTML = title;
}

function showRegistroForm() {
  ocultarElemento(accederForm);
  ocultarElemento(accederButton);

  mostrarElemento(registroForm);
  mostrarElemento(registroButton);

  mostrarElemento(showAccederButton);
  ocultarElemento(showRegistroButton);

  changeModalTitle("Registrarme");
}

function showAccederForm() {
  mostrarElemento(accederForm);
  mostrarElemento(accederButton);

  ocultarElemento(registroForm);
  ocultarElemento(registroButton);

  ocultarElemento(showAccederButton);
  mostrarElemento(showRegistroButton);

  changeModalTitle("Iniciar sesion");
}

function registroAdminUser() {
  // Creamos un objeto que es un usuario administrador instanciando la clase AdminUser
  const adminUsuario = new Usuario(
    `Julieta Correa`,
    `mjulieta210@gmail.com`,
    `Password1!`,
    true
  );
  const usuario = new Usuario(
    `Maximiliano`,
    `maxivega1@gmail.com`,
    `Password2!`,
    true
  );
  // guardamos el usuario en localStorage
  setLocalStorage("users", [adminUsuario, usuario]);
}

//Ingreso como usario//

function accederUser() {
  const email = accederInputEmail.value;
  const contrasenia = accederInputPassword.value;

  // mostrarMensaje(resumen);
  // console.log(accederInputEmail.value);
  // console.log(accederInputPassword.value);

  if (!email || !contrasenia) {
    modalWarning.fire(
      "Completa todos los campos",
      "Debes completar todos los campos para iniciar sesion",
      "info"
    );
    return;
  }

  if (validarEmail(email) === false ){
    modalWarning.fire(
    "Formato de mail incorrecto",
    "El formato correcto es: mail@mail.com",
    "error"
  );
  return

  }

  // const raw = getLocalStorage("users");
  const users = JSON.parse(getLocalStorage("users"));
  const usuarioEncontrado = users.find((user) => user.email === email);

  if (!usuarioEncontrado) {
    modalWarning.fire(
      "Credenciales incorrectas",
      "Usuario o contraseña incorrectas",
      "error"
    );
    return;
  }

  if (usuarioEncontrado.contrasenia !== contrasenia) {
    modalWarning.fire(
      "Credenciales incorrectas",
      "Usuario o contraseña incorrectas",
      "error"
    );

    return;
  }

  if (usuarioEncontrado.isAdmin === true) {
    mostrarElemento(userType);
    // console.log(userType);
    userType.innerHTML = "Administrador";
    sessionStorage.setItem("user-session", JSON.stringify(usuarioEncontrado));
    closeModal("acceder-modal");
    ocultarElemento(initSessionButton);
    mostrarElemento(closeSessionButton);
    modalSuccess.fire(
      "Inicio de sesion exitoso",
      "Te logueaste exitosamente como administrador",
      "success"
    );
  }
}

// Retorna una instancia del modal

function checkUsuarioIngresado() {

  const usuarioIngresado = JSON.parse(sessionStorage.getItem("user-session"));

  if (usuarioIngresado) {
    mostrarElemento(userType);
    userType.innerHTML = "Administrador";
    ocultarElemento(initSessionButton);
    mostrarElemento(closeSessionButton);
  } else {
    ocultarElemento(userType);
    ocultarElemento(closeSessionButton);
    mostrarElemento(initSessionButton);
  }
}

function closeSession() {
  sessionStorage.removeItem("user-session");
  checkUsuarioIngresado();
  modalSuccess.fire(
    "Cierre de sesion exitoso",
    "La sesión se cerró exitosamente",
    "success"
  );
}
