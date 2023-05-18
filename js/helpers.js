function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}

function validarURLimagenes(avatarProfesor) {
  const regexImagenURL = /(https?:)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;
  if (regexImagenURL.test(avatarProfesor)) {
    return true;
  } else {
    return false;
  }
}


function validarTiempo(tiempo) {
  if(parseInt(tiempo) > 0){
    return true;
  }else {
    return false;
}
}

function validarPrecio(precio) {
  if(parseInt(precio)>=0){
    return true;
  }
}

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

export function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexEmail.test(email)) {
    return true;
  } else {
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


export function validarContrasenia(contrasenia) {
  const regexContrasenia = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regexContrasenia.test(contrasenia)) {
    return true;
  } else {
    return false;
  }
}

export function resumenValidacionInicioSesion(email, contrasenia) {
  let resumen = "";
  if (!validarEmail(email)) {
    resumen += "El <strong>correo electrónico</strong> ingresado es INCORRECTO. Debe contener entre 2 y 60 caracteres, @ y/o .com <br>";
  }
  if (!validarContrasenia(contrasenia)) {
    resumen += "La <strong>contraseña</strong> ingresada es INCORRECTA. Debe contener minúsculas,mayúsculas, dígitos y/o símbolos.<br>";
  }
  return resumen;
}
