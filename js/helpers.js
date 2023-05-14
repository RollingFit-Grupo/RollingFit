// helpers para validar los campos del formulario de Admin

/* Para validar el campo ID recordar colocar en el constructor un parámetro por defecto, en este caso será la direccion de la librería uuidv4 que dejaré en la card de helpers del panel de trello. Así mismo se deberá linkear dicha libreria en el archivo Admin.html */

function validarCantidadCaracteres(texto, min, max) {
  if (texto.legth >= min && texto.legth <= max) {
    console.log("la palabra es válida");
    return true;
  } else {
    console.log("la palabra No es válida");
    return false;
  }
}

// Expresion Regular para validar url de imágenes
function validarURLimagenes(avatarProfesor, imagenProfesor) {
  const regexImagenURL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  if (regexImagenURL.test(avatarProfesor, imagenProfesor)) {
    console.log("la URL de la imagen es válida");
    return true;
  } else {
    console.log("la URL de la imagen No es válida");
    return false;
  }
}

// Lógica para validar campo de opciones
function validarCategoria(categoria) {
  if (
    categoria.legth > 0 &&
    (categoria === "Calistenia" ||
      categoria === "Gimnasio" ||
      categoria === "Funcional" ||
      categoria === "Spinning")
  ) {
    return true;
  } else {
    return false;
  }
}

// Lógica para validar campo Tiempo
function validarTiempo(tiempo) {
  return parseInt(tiempo) >= 2 && parseInt(tiempo) <= 64;
}

// helpers para validar los campos de los formularios de Registro y Acerca de Nosotros
