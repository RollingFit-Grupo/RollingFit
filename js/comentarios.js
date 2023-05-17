//extrae el id de servicio ubicado en el url
const parametroURL = new URLSearchParams(window.location.search);
const idServicio = parametroURL.get("id");
const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === idServicio
);

let TextAreaComentario = document.getElementById("TextAreaComentario");
let formularioComentario = document.getElementById("formComentario");
const resenias = document.getElementById("resenias");
let fechaActual = new Date();

formularioComentario.addEventListener("submit", agregarResenia);


function agregarResenia(e) {
  e.preventDefault();
  const resenia = TextAreaComentario.value.trim();
  if (resenia !== "") {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item mt-2 animate__animated animate__lightSpeedInLeft";
    listItem.innerHTML = `<h5 class="text-break"> ${resenia}</h5> <span class="text-secondary">${obtenerFechaHora()}</span><hr>`;
    resenias.appendChild(listItem);
    TextAreaComentario.value = "";

    //constante que contiene resenia y fecha
    const nuevaResenia = {
      resenia: resenia,
      fecha: obtenerFechaHora(),
    };
    //Agrega resenia al array Servicio.resenia
    servicioBuscado.resenia.push(nuevaResenia);

    //Actualiza el localStorage
    localStorage.setItem("listaServicios", JSON.stringify(listaServicio));
  }
}

function obtenerFechaHora() {
  let fechaActual = new Date();
  const dia = fechaActual.getDay(),
    mes = fechaActual.getMonth(),
    anio = fechaActual.getFullYear();

  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const monthsOfYear = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
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
