const parametroURL = new URLSearchParams(window.location.search);
const idServicio = parametroURL.get("id");
const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === idServicio
);
let TextAreaComentario = document.getElementById("TextAreaComentario");
let TextAreaUsuario = document.getElementById("TextAreaUsuario");
let formularioComentario = document.getElementById("formComentario");
const resenias = document.getElementById("resenias");

let fechaActual = new Date();

let estrellas = document.querySelectorAll(".puntaje span");
let puntajeResenia = 0;

for (let estrella of estrellas) {
  estrella.addEventListener("click", function () {
    let puntaje = parseInt(this.dataset.puntaje);

    for (let estrella of estrellas) {
      let estrellaPuntaje = parseInt(estrella.dataset.puntaje);
      if (estrellaPuntaje <= puntaje) {
        estrella.style.color = "orange";
        estrella.setAttribute("data-clicked", "true");
      } else {
        estrella.style.color = "";
        estrella.removeAttribute("data-clicked");
      }
    }

    puntajeResenia = puntaje;
  });
}

////////////////////////////////

if (sessionStorage.getItem("user-session")) {
  const sessionData = JSON.parse(sessionStorage.getItem("user-session"));
  const email = sessionData.email;
}
if (servicioBuscado && servicioBuscado.resenia !== undefined) {
  dibujarResenias();
}
function dibujarResenias() {
  const resenias = document.getElementById("resenias");
  resenias.innerHTML = "";

  servicioBuscado.resenia.forEach((resenia) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item mt-2 animate__animated animate__lightSpeedInLeft";
    listItem.innerHTML = `<h6 class="fw-bold">${
      resenia.email
    }</h6><h5 class="text-break">${
      resenia.resenia
    }</h5> <span class="text-primary">${generarEstrellas(
      resenia.puntaje
    )} - <strong>${resenia.puntaje} ${
      resenia.puntaje == 1 ? "Estrella" : "Estrellas"
    }</strong></span> <br> <span class="text-secondary">${
      resenia.fecha
    }</span><hr>`;
    resenias.appendChild(listItem);
  });
}

formularioComentario.addEventListener("submit", agregarResenia);
function agregarResenia(e) {
  e.preventDefault();
  const resenia = TextAreaComentario.value.trim();
  if (
    resenia !== "" &&
    TextAreaUsuario.value !== "mail@usuario.com" &&
    TextAreaUsuario.value !== undefined &&
    puntajeResenia !== undefined &&
    puntajeResenia > 0
  ) {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item mt-2 animate__animated animate__lightSpeedInLeft";
    listItem.innerHTML = `<h6 class="fw-bold">${email}</h6><h4 class="text-break"> ${resenia}</h4> <span class="text-primary">${generarEstrellas(
      puntajeResenia
    )} - <strong>${puntajeResenia} ${
      puntajeResenia == 1 ? "Estrella" : "Estrellas"
    }</strong></span> <br> <span class="text-secondary">${obtenerFechaHora()}</span><hr>`;
    resenias.appendChild(listItem);
    TextAreaComentario.value = "";

    const nuevaResenia = {
      resenia: resenia,
      fecha: obtenerFechaHora(),
      puntaje: puntajeResenia,
      email: TextAreaUsuario.value,
    };
    servicioBuscado.resenia.push(nuevaResenia);

    localStorage.setItem("listaServicios", JSON.stringify(listaServicio));

    puntajeResenia = [];
  }
}
function generarEstrellas(puntaje) {
  let estrellas = "";
  for (let i = 0; i < puntaje; i++) {
    estrellas += '<span class="text-primary">&#9733;</span>';
  }
  return estrellas;
}

function obtenerFechaHora() {
  let fechaActual = new Date();
  const dia = fechaActual.getDay(),
    mes = fechaActual.getMonth(),
    anio = fechaActual.getFullYear();
  let horaActual = fechaActual.getHours(),
    minutosActuales = fechaActual.getMinutes(),
    segundosActuales = fechaActual.getSeconds();
  if (segundosActuales < 10) {
    segundosActuales = "0" + segundosActuales;
  }
  if (minutosActuales < 10) {
    minutosActuales = "0" + minutosActuales;
  }
  if (horaActual < 10) {
    horaActual = "0" + horaActual;
  }
  return `${horaActual}:${minutosActuales}:${segundosActuales} - ${dia}/${mes}/${anio}`;
}
