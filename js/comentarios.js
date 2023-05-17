//extrae el id de servicio ubicado en el url
const parametroURL = new URLSearchParams(window.location.search);
const idServicio = parametroURL.get("id");
const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === idServicio
);
//busca el formulario de reseñas
let TextAreaComentario = document.getElementById("TextAreaComentario");
let formularioComentario = document.getElementById("formComentario");
const resenias = document.getElementById("resenias");

let fechaActual = new Date();

//Puntaje estrellas
let estrellas = document.querySelectorAll(".puntaje span");
let puntajeResenia = 0;

for (let estrella of estrellas) {
  estrella.addEventListener("click", function () {
    let puntaje = parseInt(this.dataset.puntaje);

    for (let estrella of estrellas) {
      let estrellaPuntaje = parseInt(estrella.dataset.puntaje);
      if (estrellaPuntaje <= puntaje) {
        estrella.style.color = "orange"; // Marca las estrellas hasta el puntaje seleccionado
        estrella.setAttribute("data-clicked", "true");
      } else {
        estrella.style.color = ""; // Restablecer el color de las estrellas restantes
        estrella.removeAttribute("data-clicked");
      }
    }

    puntajeResenia = puntaje;
    console.log(puntajeResenia);
  });
}

////////////////////////////////

if (servicioBuscado && servicioBuscado.resenia !== undefined) {
  dibujarResenias();
}

//trae y muestra las reseñas ya guardadas en el localStorage
function dibujarResenias() {
  const resenias = document.getElementById("resenias");
  resenias.innerHTML = ""; // Clear previous content

  servicioBuscado.resenia.forEach((resenia) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item mt-2 animate__animated animate__lightSpeedInLeft";
    listItem.innerHTML = `<h5 class="text-break">${resenia.resenia}</h5> <span class="text-primary">${generarEstrellas(resenia.puntaje)} - <strong>${resenia.puntaje} ${resenia.puntaje == 1 ? 'Estrella' : 'Estrellas'}</strong></span> <br> <span class="text-secondary">${resenia.fecha}</span><hr>`;
    resenias.appendChild(listItem);
  });
}

//agrega una nueva reseña al localStorage en su respectivo servicio
formularioComentario.addEventListener("submit", agregarResenia);
function agregarResenia(e) {
  e.preventDefault();
  const resenia = TextAreaComentario.value.trim();
  if (resenia !== "" && puntajeResenia !== undefined) {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item mt-2 animate__animated animate__lightSpeedInLeft";
    listItem.innerHTML = `<h5 class="text-break"> ${resenia}</h5> <span class="text-primary">${generarEstrellas(puntajeResenia)} - <strong>${puntajeResenia} ${puntajeResenia == 1 ? 'Estrella' : 'Estrellas'}</strong></span> <br> <span class="text-secondary">${obtenerFechaHora()}</span><hr>`;
    resenias.appendChild(listItem);
    TextAreaComentario.value = "";
    console.log(puntajeResenia);

    const nuevaResenia = {
      resenia: resenia,
      fecha: obtenerFechaHora(),
      puntaje: puntajeResenia,
    };
    //Agrega resenia al array Servicio.resenia usando push(al final del array)
    servicioBuscado.resenia.push(nuevaResenia);

    //Actualiza el localStorage
    localStorage.setItem("listaServicios", JSON.stringify(listaServicio));

    puntajeResenia = [];
  }
}
//Crea la cadena de estrellas
function generarEstrellas(puntaje) {
  let estrellas = "";
  for (let i = 0; i < puntaje; i++) {
    estrellas += '<span class="text-primary">&#9733;</span>';
  }
  return estrellas;
}


//Obtiene y muestra la hora y fecha de la reseña
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
