
export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function ocultarElemento(element) {
  element.classList.add("d-none");
}

export function mostrarElemento(element) {
  element.classList.remove("d-none");
}

export function closeModal(modalId) {
  const myModalEl = document.getElementById(modalId);
  const myModal = bootstrap.Modal.getInstance(myModalEl);

  myModal.hide();
}


