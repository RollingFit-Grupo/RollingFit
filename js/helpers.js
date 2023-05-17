// helpers para validar los campos del formulario de Admin

/* Para validar el campo ID recordar colocar en el constructor un parámetro por defecto, en este caso será la direccion de la librería uuidv4 que dejaré en la card de helpers del panel de trello. Así mismo se deberá linkear dicha libreria en el archivo Admin.html */

function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("la palabra es válida");
    return true;
  } else {
    console.log("la palabra No es válida");
    return false;
  }
}

// Expresion Regular para validar url de imágenes
function validarURLimagenes(avatarProfesor) {
  const regexImagenURL = /(https?:)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;
  if (regexImagenURL.test(avatarProfesor)) {
    console.log("El formato de imagen es valido");
    return true;
  } else {
    console.log("El formato de imagen no es valido");
    return false;
  }
}


// Lógica para validar campo Tiempo
function validarTiempo(tiempo) {
  if(parseInt(tiempo) > 0){
    return true;
  }else {
    return false;
}
}

// Lógica para validar campo Precio
function validarPrecio(precio) {
  if(parseInt(precio)>=0){
    return true;
  }
}

// Lógica export
export function resumenValidacion(servicio,profesor,descripcion,avatarProfesor,tiempo,precio,imagen,revision,descripcionProf) {
  let resumen = "";

  if (!validarCantidadCaracteres(servicio, 3, 40)) {
    resumen += `El <strong>servicio</strong> Debe contener entre 3 y 40 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(profesor, 4, 16)) {
    resumen += `El nombre de<strong>profesor</strong> Debe contener entre 4 y 16 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(descripcion, 8, 4096)) {
    resumen += `La <strong>descripción</strong> Debe contener entre 8 y 4096 caracteres.<br>`;
  }
  if (!validarURLimagenes(avatarProfesor)) {
    resumen +=`La <strong>URL de imagen de Avatar</strong> es INCORRECTA. Los formatos admitidos son .png, .jpg, o .gif <br>`;
  }
  if (!validarTiempo(tiempo)) {
    resumen += `El <strong>tiempo</strong> Debe contener entre 2 y 64 minutos.<br>`;
  }
  if (!validarPrecio(precio)) {
    resumen += "El <strong>precio</strong> es INCORRECTO.";
  }
  if (!validarURLimagenes(imagen)) {
    resumen += `La <strong> URL</strong> de la imagen de Servicio es incorrecta`;
  }
  if (!validarTiempo(revision)) {
    resumen += `El numero de  <strong> Revisiones </strong> es incorrecto`;
  }
  if(!validarCantidadCaracteres(descripcionProf,20,2048)){
    resumen +=`La <strong>Descripción del Profesional</strong> Debe contener entre 20 y 2048 caracteres.<br>`
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
    resumen += "El <strong>correo electrónico</strong> ingresado es INCORRECTO. Debe contener entre 2 y 60 caracteres, @ y/o .com <br>";
  }
  if (!validarContrasenia(contrasenia, 2, 60)) {
    resumen += "La <strong>contraseña</strong> ingresada es INCORRECTA. Debe contener minúsculas,mayúsculas, dígitos y/o símbolos.<br>";
  }
  return resumen;
}
