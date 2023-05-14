// helpers para validar los campos del formulario de Admin

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

// helpers para validar los campos de los formularios de Registro y Acerca de Nosotros
