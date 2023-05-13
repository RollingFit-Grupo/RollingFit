/*Animaciones de Scroll*/
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

/*Animaciones de Titulo*/
let TextoGrupo1 = document.getElementById("TextoGrupo1")
let TextoGrupo2 = document.getElementById("TextoGrupo2")
const palabrasGrupo1 = ['Transformá', 'Cambiá', 'Elevá'];
const palabrasGrupo2 = ['tu cuerpo', 'tu mente', 'tu vida'];

let posicionGrupo1 = 0;
let posicionGrupo2 = 0;

let palabraGrupo1Actual = TextoGrupo1.textContent = palabrasGrupo1[posicionGrupo1]
let palabraGrupo2Actual = TextoGrupo2.textContent = palabrasGrupo2[posicionGrupo2]

function generarPosicionRandom(posicionAnterior, numPosiciones) {
    let nuevaPosicion = Math.floor(Math.random() * numPosiciones);
    while (nuevaPosicion === posicionAnterior) {
        nuevaPosicion = Math.floor(Math.random() * numPosiciones);
    }
    return nuevaPosicion;
}

