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

// Lógica para validar campo Precio
function validarPrecio(precio) {
  return parseInt(precio) >= 2 && parseInt(precio) <= 64;
}

// Lógica export
export function resumenValidacion(
  servicio,
  profesor,
  descripcion,
  avatarProfesor,
  imagenProfesor,
  categoria,
  tiempo,
  precio
) {
  let resumen = "";
  if (!validarCantidadCaracteres(servicio, 3, 100)) {
    resumen +=
      "El <strong>servicio</strong> es INCORRECTO. Debe contener entre 3 y 100 caracteres.<br>";
  }
  if (!validarCantidadCaracteres(profesor, 4, 100)) {
    resumen +=
      "El <strong>profesor</strong> es INCORRECTO. Debe contener entre 4 y 100 caracteres.<br>";
  }
  if (!validarCantidadCaracteres(descripcion, 8, 512)) {
    resumen +=
      "La <strong>descripción</strong> es INCORRECTA. Debe contener entre 8 y 512 caracteres.<br>";
  }
  if (!validarURLimagenes(avatarProfesor, imagenProfesor, 8, 256)) {
    resumen +=
      "La <strong>URL de imagen</strong> es INCORRECTA. Debe contener entre 8 y 256 caracteres además de una extensión .png, .jpg, o .gif <br>";
  }
  if (!validarTiempo(tiempo)) {
    resumen +=
      "El <strong>tiempo</strong> es INCORRECTO. Debe contener entre 2 y 64 minutos.<br>";
  }
  if (!validarPrecio(precio)) {
    resumen +=
      "El <strong>precio</strong> es INCORRECTO. Debe contener entre 2 y 64 caracteres.<br>";
  }
  if (!validarCategoria(categoria)) {
    resumen += "Seleccione una categoria";
  }
  return resumen;
}

// helpers para validar los campos del formulario Acerca de Nosotros
function validarEmail(email) {
  const regexEmail =
    / ^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$ /;
  if (regexEmail.test(email)) {
    console.log("el correo electrónico es válido");
    return true;
  } else {
    console.log("el correo electrónico es inválido");
    return false;
  }
}

export function resumenValidacionFormAcarcaDeNosotros(nombre, email, consulta) {
  let resumen = "";
  if (!validarCantidadCaracteres(nombre, 2, 60)) {
    resumen +=
      "El <strong>nombre</strong> ingresado es INCORRECTO. Debe contener entre 2 y 60 caracteres.<br>";
  }
  if (!validarEmail(email, 2, 60)) {
    resumen +=
      "El <strong>correo electrónico</strong> ingresado es INCORRECTO. Debe contener entre 2 y 60 caracteres, @ y/o .com <br>";
  }
  if (!validarCantidadCaracteres(consulta, 5, 600)) {
    resumen +=
      "La <strong>consulta</strong> debe contener entre 5 y 600 caracteres.<br>";
  }
  return resumen;
}

// Lógica para validar el formulario de Registro

function validarContrasenia(contrasenia) {
  const regexContrasenia =
    / ^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (regexContrasenia.test(contrasenia)) {
    console.log("la contraseña es válido");
    return true;
  } else {
    console.log("la contraseña es inválida");
    return false;
  }
}

export function resumenValidacionRegistro(email, contrasenia) {
  let resumen = "";
  if (!validarEmail(email, 2, 60)) {
    resumen +=
      "El <strong>correo electrónico</strong> ingresado es INCORRECTO. Debe contener entre 2 y 60 caracteres, @ y/o .com <br>";
  }
  if (!validarContrasenia(contrasenia, 2, 60)) {
    resumen +=
      "La <strong>contraseña</strong> ingresada es INCORRECTA. Debe contener minúsculas,mayúsculas, dígitos y/o símbolos.<br>";
  }
  return resumen;
}
