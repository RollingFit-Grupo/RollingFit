// Funciones reutilizables que se exportan para ser utilizadas en otros archivos

// Permite obtener un elemento del localstorage (Se debe enviar por parametros la key de localStorage)
export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

// Permite guardar un elemento en el localstorage (Se debe enviar por parametros la key y el valor a guardar)
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Permite ocultar un elemento del DOM con la clase d-none (Se debe pasar el elemento por parametro)
export function hideElement(element) {
  element.classList.add("d-none");
}

// Permite mostrar un elemento del DOM quitando la clase d-none (Se debe pasar el elemento por parametro)
export function showElement(element) {
  element.classList.remove("d-none");
}

// Permite cerrar un modal de bootstrap (Se debe pasar el id del modal por parametro)
export function closeModal(modalId) {
  const myModalEl = document.getElementById(modalId);
  const myModal = bootstrap.Modal.getInstance(myModalEl);

  myModal.hide();
}
