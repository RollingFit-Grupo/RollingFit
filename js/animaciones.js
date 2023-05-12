const seccionesFade = document.querySelectorAll(".fade-in");
const seccionesTranslateIzq = document.querySelectorAll(".fade-izquierda");
const seccionesTranslateDer = document.querySelectorAll(".fade-derecha");

const opcionesFade = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
const opcionesTranslate = {
    root: null,
    threshold: 0
};

const mostrarEnScroll = new IntersectionObserver(fadeIn, opcionesFade);

function fadeIn(entradas, mostrarEnScroll) {
    entradas.forEach(entrada => {
        if (!entrada.isIntersecting) {
            return
        }else{
            console.log(entrada.target)
            entrada.target.classList.add("mostrar")
            mostrarEnScroll.unobserve(entrada.target);
        }
        });
}

seccionesFade.forEach(seccion => mostrarEnScroll.observe(seccion))
seccionesTranslateIzq.forEach(seccion => mostrarEnScroll.observe(seccion))
seccionesTranslateDer.forEach(seccion => mostrarEnScroll.observe(seccion))
