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
function cambiarTexto() {
    let nuevaPosicionGrupo1 = generarPosicionRandom(posicionGrupo1,palabrasGrupo1.length);
    posicionGrupo1 = nuevaPosicionGrupo1;
    palabraGrupo1Actual = TextoGrupo1.textContent = palabrasGrupo1[posicionGrupo1];    
    
    let nuevaPosicionGrupo2 =  generarPosicionRandom(posicionGrupo2,palabrasGrupo2.length);
    posicionGrupo2 = nuevaPosicionGrupo2;
    palabraGrupo2Actual = TextoGrupo2.textContent = palabrasGrupo2[posicionGrupo2];
}
function cambiarClaseTexto() {
    if (TextoGrupo1.classList.contains("slide-texto-fromBottom")) {
        TextoGrupo1.classList.replace("slide-texto-fromBottom","slide-texto-toTop")
    }else if(TextoGrupo1.classList.contains("slide-texto-toTop")){        
        TextoGrupo1.classList.replace("slide-texto-toTop","slide-texto-fromBottom")
    }
    if (TextoGrupo2.classList.contains("slide-texto-fromTop")) {
        TextoGrupo2.classList.replace("slide-texto-fromTop","slide-texto-toBottom")
    }else if(TextoGrupo2.classList.contains("slide-texto-toBottom")){        
        TextoGrupo2.classList.replace("slide-texto-toBottom","slide-texto-fromTop")
    }
}
function animarTexto() {
    setTimeout(() =>{
        cambiarClaseTexto()
        setTimeout(() => {
            cambiarTexto();
            cambiarClaseTexto()
        }, 1000);
    },3000)  
};
window.addEventListener('load', ()=>{
    setInterval(animarTexto,5000);
});
