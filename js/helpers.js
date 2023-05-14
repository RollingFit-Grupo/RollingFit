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

// helpers para validar los campos de los formularios de Registro y Acerca de Nosotros
