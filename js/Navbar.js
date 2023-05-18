let temaConfigurado = JSON.parse(localStorage.getItem("theme")) || "light";

let iconThemeShow = document.querySelector("#iconThemeShow");

cambiarTema(temaConfigurado);

let btn_light = document.querySelector("#btn_light");
let btn_dark = document.querySelector("#btn_dark");

btn_light.addEventListener("click", () => cambiarTema("light"));
btn_dark.addEventListener("click", () => cambiarTema("dark"));

function cambiarTema(color) {
  let htmlElement = document.querySelector("html");
  htmlElement.setAttribute("data-bs-theme", color);

  localStorage.setItem("theme", JSON.stringify(color));


  if (color === "dark") {
    iconThemeShow.classList.remove("bi-brightness-high-fill");
    iconThemeShow.classList.add("bi-moon-fill");
  } else if (color === "light") {
    iconThemeShow.classList.remove("bi-moon-fill");
    iconThemeShow.classList.add("bi-brightness-high-fill");
  }
}
