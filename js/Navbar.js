// Obtenemos el tema configurado del usuario
let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "light";


//  Obtenemos el icono que se muestra segun sea tema claro u oscuro
let iconThemeShow = document.querySelector("#iconThemeShow");

//  Cambiamos tema por el tema configurado que trajimos del localStorage
cambiarTema(temaConfigurado);


// OBTENER botones light y dark
let btn_light = document.querySelector("#btn_light");
let btn_dark = document.querySelector("#btn_dark");

// Crear los eventos para llamar a la funcion
btn_light.addEventListener("click", () => cambiarTema("light"));
btn_dark.addEventListener("click", () => cambiarTema("dark"));

// Crear la funcion cambiar tema
function cambiarTema(color) {
  // Debemos obtener el elemento html
  let htmlElement = document.querySelector("html");
  // Agregarle el atributo data-bs-theme con su valor en color
  htmlElement.setAttribute("data-bs-theme", color);

  // Guardar esta info en el localStorage
  localStorage.setItem("theme", JSON.stringify(color));

  //  Depende si color es "light" o "dark"

  if (color === "dark") {
    iconThemeShow.classList.remove("bi-brightness-high-fill");
    iconThemeShow.classList.add("bi-moon-fill");
  } else if (color === "light") {
    iconThemeShow.classList.remove("bi-moon-fill");
    iconThemeShow.classList.add("bi-brightness-high-fill");
  }
}