import Servicio from "./classDetalle.js";
import { resumenValidacion } from "./helpers.js";

let formServicio = document.getElementById(`formServicio`);
let modalServicio = new bootstrap.Modal(document.getElementById("modalEditar"));
const btnCrearServicio = document.getElementById(`btnCrear`);
const alertaModal = document.getElementById(`alertaModal`);
const alertaaModal = document.getElementById(`alertaAModal`);

let id = document.getElementById(`id`),
  servicioNombre = document.getElementById(`servicio`),
  profesor = document.getElementById(`profesor`),
  imagen = document.getElementById(`imagen`),
  socialProf = document.getElementById(`profesorImg`),
  precio = document.getElementById(`precio`),
  tiempo = document.getElementById(`tiempo`),
  revision = document.getElementById(`revisiones`),
  categoria = document.getElementById(`categoria`),
  descripcion = document.getElementById(`descripcion`),
  descripcionProfesional= document.getElementById(`descripcionProfesional`);


let altaServicio = true;
let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];


if (listaServicios.length > 0) {
  listaServicios = listaServicios.map(
    (servicio) =>
      new Servicio(
        servicio.id,
        servicio.servicioNombre,
        servicio.profesor,
        servicio.imagen,
        servicio.socialProf,
        servicio.precio,
        servicio.tiempo,
        servicio.categoria,
        servicio.descripcion,
        servicio.revision,
        servicio.resenia,
        servicio.calificacion,
        servicio.descripcionProfesional
      )
  );
}

cargainicial();
cargarEstatico();

function cargainicial() {
  if (listaServicios.length > 0) {
    listaServicios.map((servicio, posicion) =>
      crearFila(servicio, posicion + 1)
    );
  }else{
    localStorage.setItem("bandera",false);
  }
}
function cargarEstatico(){
  if (JSON.parse(localStorage.getItem("bandera"))==false){
  const servicioNuevo = new Servicio(
    undefined,
    `Rutina de Spinning`,
    `Belinda Martinez`,
    `https://media.istockphoto.com/id/485255296/es/foto/ciclismo-bajo-techo.jpg?s=612x612&w=0&k=20&c=fJxB7iK5FaaFI25wMguhiTEgxmuoMUqrjJMoDSU9G8g=`,
    `https://media.istockphoto.com/id/947268424/es/foto/fuerte-atractiva-atl%C3%A9tica-joven-hacer-ejercicio-en-gimnasio.jpg?s=612x612&w=0&k=20&c=L0Qqr21ECLq6IjNN3DgfXCbA1Rl2JESKA_qTFH4aO34=`,
    2200,
    0,
    `Spinning`,
    `Una rutina de spinning es una actividad de entrenamiento en bicicleta estática que se realiza en grupo, guiada por un instructor. Esta disciplina combina música enérgica, cambios de ritmo y resistencia ajustable para ofrecer un entrenamiento cardiovascular completo y desafiante.Una rutina de spinning típica incluiría los siguientes elementos:<br>
    Calentamiento: Comienza con una fase de calentamiento para preparar el cuerpo para el ejercicio. Incluye movimientos suaves en la bicicleta para elevar la temperatura corporal y activar los músculos principales.<br>
    Resistencia y cambios de ritmo: Durante la rutina, el instructor guiará a los participantes a través de diferentes niveles de resistencia en la bicicleta. Estos cambios de resistencia se combinan con variaciones en la velocidad y el ritmo de pedaleo, como subidas simuladas, sprints y intervalos.<br>
    Posiciones y técnicas: Durante la clase, se utilizan diferentes posiciones en la bicicleta para trabajar diferentes grupos musculares y lograr un entrenamiento más completo. Algunas posiciones comunes incluyen sentado, de pie con las manos en el manillar, de pie con las manos en la posición de carrera, entre otras.    
    Sprints y intervalos de alta intensidad: Se incorporan períodos cortos de sprints de alta velocidad o intervalos de alta intensidad para aumentar la frecuencia cardíaca y mejorar la resistencia cardiovascular.<br>    
    Trabajo de resistencia y fuerza: Además de los sprints y los cambios de ritmo, la rutina de spinning puede incluir segmentos dedicados al trabajo de resistencia y fuerza. Esto puede implicar aumentar la resistencia en la bicicleta y mantener una velocidad constante durante un período de tiempo determinado para fortalecer las piernas y los músculos principales.<br>
    Enfriamiento y estiramientos: Al finalizar la rutina de spinning, se dedica tiempo a un enfriamiento gradual, que incluye pedalear suavemente con resistencia baja para permitir que el cuerpo se recupere. También se realizan ejercicios de estiramiento para ayudar a reducir la tensión muscular y mejorar la flexibilidad.
    Es importante tener en cuenta que la estructura y los elementos específicos de una rutina de spinning pueden variar según el instructor y el nivel de los participantes. Sin embargo, en general, una rutina de spinning está diseñada para ofrecer un entrenamiento cardiovascular intenso, mejorar la resistencia, quemar calorías y fortalecer los músculos de las piernas.`,
    3,
    [],
    4,
    `Como profesora de spinning, siento una verdadera pasión por lo que hago. Cada vez que entro al estudio de spinning, estoy llena de energía y emoción, lista para brindar una clase inspiradora y motivadora a mis alumnos.
    Mantenerme en forma y saludable es una prioridad para mí. Además de enseñar spinning, también practico otros tipos de ejercicio regularmente y cuido mi alimentación para mantener un estilo de vida equilibrado. Me encanta sentir la fuerza y la vitalidad que proviene de llevar un estilo de vida saludable, y eso se refleja en mi enseñanza en el estudio.
    Los fines de semana, aprovecho para salir y divertirme con mis amigas. Una de mis actividades favoritas es ir a bailar a discotecas. Me encanta la música, el ritmo y la energía de la pista de baile. Bailar es una forma divertida de ejercitarse y, al mismo tiempo, liberar el estrés acumulado durante la semana. Disfruto de esos momentos de alegría y camaradería con mis amigas, creando recuerdos inolvidables mientras nos divertimos en la pista.
    Aunque algunas personas pueden pensar que la vida nocturna no es compatible con un estilo de vida saludable, para mí, es una forma de equilibrar mi pasión por el fitness con momentos de diversión y desconexión. Bailar es una expresión de libertad y me permite disfrutar de la música y el movimiento de una manera única.
    En resumen, como profesora de spinning, tengo una pasión ardiente por mi trabajo y una dedicación incansable a mantenerme en forma y saludable. Los fines de semana, aprovecho para bailar en discotecas y disfrutar de momentos de diversión con mis amigas. Es una combinación perfecta que me permite mantener el equilibrio y la felicidad en mi vida.`
  );
  listaServicios.push(servicioNuevo);
  guardarEnLocalstorage();
  crearFila(servicioNuevo, listaServicios.length);
  const servicioNuevo2 = new Servicio(
    undefined,
    `Rutina de pesas para Volumen`,
    `Mariano Espeche`,
    `https://media.istockphoto.com/id/1419030438/es/foto/culturista-masculino-musculoso-haciendo-ejercicio-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=h6UJO0BgcaZWjr1wt8LWjo7tVnTLBCUUJ098iDa3YXE=`,
    `https://media.istockphoto.com/id/489643985/es/foto/de-gimnasio.jpg?s=612x612&w=0&k=20&c=y4db-qXjoYlS6fd5NSTHkVw3fzEjVkBrezmFKPdcEt0=`,
    3000,
    2,
    "Levantamiento de pesas",
    `Una rutina de pesas para volumen es un programa de entrenamiento diseñado para promover el crecimiento y aumento de masa muscular. El objetivo principal de esta rutina es estimular el cuerpo para que desarrolle mayor tamaño y fuerza en los músculos.
    Una rutina de pesas para volumen generalmente incluye los siguientes aspectos:<br>
    Ejercicios compuestos: Se enfoca en ejercicios que trabajan varios grupos musculares a la vez, como sentadillas, peso muerto, press de banca, press militar, remo con barra, entre otros. Estos ejercicios son fundamentales para estimular el crecimiento muscular en todo el cuerpo.<br>
    Series y repeticiones: Se realizan series de 8 a 12 repeticiones por ejercicio. Este rango de repeticiones se considera óptimo para promover el crecimiento muscular. Se busca trabajar con cargas pesadas que permitan alcanzar el fallo muscular en las últimas repeticiones de cada serie.<br>
    Descanso entre series: Se establece un tiempo de descanso de aproximadamente 1 a 2 minutos entre cada serie. Esto permite la recuperación parcial de los músculos y la preparación para la siguiente serie.<br>
    Volumen de entrenamiento: Se realiza un volumen de entrenamiento moderado a alto, lo cual implica realizar varias series y ejercicios en cada sesión. Se busca estimular los músculos de manera intensa y suficiente para desencadenar adaptaciones y crecimiento muscular.<br>
    Progresión de carga: Se busca incrementar gradualmente la carga utilizada en los ejercicios a medida que el cuerpo se adapta y se vuelve más fuerte. Esta progresión de carga es esencial para continuar estimulando el crecimiento muscular a lo largo del tiempo.<br>
    Nutrición adecuada: Junto con el entrenamiento, es importante mantener una alimentación adecuada que proporcione los nutrientes necesarios para la reparación y crecimiento muscular. Una dieta rica en proteínas, carbohidratos y grasas saludables es fundamental para apoyar los procesos de construcción muscular.<br>
    Es importante tener en cuenta que una rutina de pesas para volumen debe adaptarse a las capacidades individuales y preferencias de cada persona. Además, se recomienda contar con la supervisión de un profesional del fitness para asegurar una correcta ejecución de los ejercicios y evitar lesiones.`,
    3,
    [],
    5,
    `Como profesor de pesas en el gimnasio, me enfoco completamente en mi trabajo y en brindar la mejor experiencia de entrenamiento a mis alumnos. Durante la semana, mi enfoque principal es ayudar a las personas a alcanzar sus objetivos físicos y promover un estilo de vida saludable.
    Fuera del gimnasio, disfruto de mi tiempo libre sumergiéndome en el mundo de los videojuegos y el anime. Me encanta explorar nuevos mundos virtuales, participar en desafíos emocionantes y sumergirme en historias épicas a través de mis juegos favoritos. Además, disfruto de la animación japonesa y me emociono con las tramas y los personajes cautivadores que ofrece el anime.
    A diferencia de muchos, no suelo salir los fines de semana. Prefiero quedarme en casa y dedicar mi tiempo a mis aficiones digitales. Para mí, los videojuegos y el anime son una forma de desconectar del mundo real y sumergirme en un universo lleno de emociones y diversión.
    Aunque algunos pueden considerar que mi elección de pasar los fines de semana en casa es solitaria, encuentro una gran satisfacción en la compañía virtual que encuentro en mis pasatiempos. Los videojuegos y el anime me brindan una forma de entretenimiento inmersiva y estimulante, y me ayudan a recargar energías para enfrentar la próxima semana de entrenamiento en el gimnasio.`
  );
  listaServicios.push(servicioNuevo2);
  guardarEnLocalstorage();
  crearFila(servicioNuevo2, listaServicios.length);
  const servicioNuevo3 = new Servicio(
    undefined,
    `Rutina de pesas para Definicion`,
    `Lautaro Diaz`,
    `https://media.istockphoto.com/id/1010065324/es/foto/deportista-con-pista-para-correr-de-brezo.jpg?s=612x612&w=0&k=20&c=n2tflS7G6zxhZutW4im0sMxGXKSt3Dg-N479cuXlfp0=`,
    `https://media.istockphoto.com/id/486809310/es/foto/hombre-haciendo-extensi%C3%B3n-de-piernas-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=U8hquZ3jwlFxMdjVB43KguR-4z82MQCy7ZqZITL1UWc=`,
    4500,
    3,
    "Levantamiento de pesas",
    `Una rutina de pesas para definición es un programa de entrenamiento diseñado para reducir el porcentaje de grasa corporal y resaltar la musculatura, buscando obtener un aspecto más tonificado y definido. El objetivo principal de esta rutina es mantener la masa muscular mientras se quema grasa.
    Una rutina de pesas para definición generalmente incluye los siguientes aspectos:<br>    
    Ejercicios compuestos y aislados: Se combinan ejercicios compuestos, que involucran varios grupos musculares, con ejercicios aislados que se centran en grupos musculares específicos. Esto permite trabajar todo el cuerpo de manera equilibrada y asegurarse de trabajar cada músculo de manera adecuada.<br>    
    Series y repeticiones: Se realizan series de 10 a 15 repeticiones por ejercicio. Este rango de repeticiones se considera óptimo para promover la definición muscular y aumentar la resistencia muscular. Se busca trabajar con cargas moderadas que permitan completar las repeticiones con buena técnica y control.<br>    
    Descanso entre series: Se establece un tiempo de descanso breve, de aproximadamente 30 a 60 segundos, entre cada serie. Esto ayuda a mantener la frecuencia cardíaca elevada y a mantener un ritmo de entrenamiento constante, lo que favorece la quema de grasa.<br>    
    Superseries y circuitos: Se pueden incluir superseries, que consisten en realizar dos ejercicios consecutivos sin descanso entre ellos, o circuitos, que implican realizar una serie de ejercicios en secuencia sin descanso. Estas técnicas ayudan a aumentar la intensidad del entrenamiento y a maximizar la quema de calorías.<br>    
    Enfoque en la técnica y el control: Se presta especial atención a la ejecución correcta de cada ejercicio, asegurándose de mantener una buena postura y controlar el movimiento en todo momento. Esto ayuda a trabajar de manera más efectiva los músculos objetivo y a prevenir lesiones.<br>    
    Cardiovascular complementario: Además del entrenamiento con pesas, se recomienda complementar la rutina con ejercicios cardiovasculares, como correr, hacer bicicleta o utilizar la máquina elíptica. El cardio ayuda a aumentar el gasto calórico total y a favorecer la quema de grasa.<br>    
    Nutrición adecuada: Junto con el entrenamiento, es fundamental mantener una alimentación equilibrada y ajustada a los objetivos de definición. Se recomienda seguir una dieta baja en calorías, rica en proteínas magras, verduras, frutas y alimentos integrales. Esto ayuda a crear un déficit calórico y a favorecer la pérdida de grasa.<br>    
    Es importante recordar que una rutina de pesas para definición debe adaptarse a las capacidades individuales y preferencias de cada persona. Además, se recomienda contar con la orientación de un profesional del fitness para diseñar un programa personalizado y obtener mejores resultados.`,
    5,
    [],
    3,
    `Como profesor de pesas en el gimnasio, me siento realmente afortunado de poder dedicarme a lo que me apasiona. Cada día, entro al gimnasio con una sonrisa en mi rostro, listo para inspirar y motivar a mis alumnos a alcanzar sus metas físicas.Disfruto enormemente ayudando a las personas a descubrir su fuerza y superar sus límites. 
    Mi objetivo principal es asegurarme de que todos los que entrenan conmigo se sientan seguros y confiados mientras se esfuerzan por mejorar su condición física.
    Además de mi trabajo en el gimnasio, también tengo una pasión por la naturaleza y la aventura. Los fines de semana, cuando tengo tiempo libre, me alejo de las pesas y salgo a escalar montañas. La sensación de desafiar mis habilidades físicas y mentales mientras disfruto de impresionantes paisajes naturales es indescriptible.
    Esta combinación de vida saludable, pasión por el fitness y amor por la naturaleza me permite equilibrar mi carrera como profesor de pesas y mis actividades al aire libre. Me llena de energía y me ayuda a mantenerme motivado y comprometido tanto en mi vida profesional como personal.`
  );
  listaServicios.push(servicioNuevo3);
  guardarEnLocalstorage();
  crearFila(servicioNuevo3, listaServicios.length);
  const servicioNuevo4 = new Servicio(
    undefined,
    `Rutina de Nutricion para bajar de peso`,
    `Carla Costanera`,
    `https://media.istockphoto.com/id/1395337483/es/foto/deportes-y-actividades-de-gimnasio.jpg?s=612x612&w=0&k=20&c=4-e0YI1GCfSaQG-QUIcE-HokoW6PdQAcUxKdw9uqbTE=`,
    `https://media.istockphoto.com/id/1391410223/es/foto/deportes-y-actividades-de-gimnasio.jpg?s=612x612&w=0&k=20&c=EJ9mvIcZvYUJRlbhjvTMMhgDPTTasqG3HwL0xkVPqEw=`,
    1500,
    1,
    "Gimnasia Aerobica",
    `Una rutina de gimnasia aeróbica para adelgazar es un programa de entrenamiento diseñado para quemar calorías, mejorar la resistencia cardiovascular y ayudar en la pérdida de peso. La gimnasia aeróbica combina movimientos dinámicos, coreografías y ejercicios cardiovasculares para trabajar todo el cuerpo de manera intensa y efectiva.
    La rutina de gimnasia aeróbica para adelgazar puede incluir los siguientes aspectos:<br>    
    Calentamiento: Comienza con una fase de calentamiento para preparar el cuerpo para el ejercicio. Esto puede incluir movimientos de estiramiento, ejercicios de movilidad articular y una serie de ejercicios cardiovasculares de baja intensidad, como caminar o trotar en el lugar.<br>    
    Coreografías y pasos aeróbicos: La gimnasia aeróbica se caracteriza por el uso de coreografías y pasos aeróbicos que combinan movimientos de bajo impacto, como saltos, pasos laterales, giros y desplazamientos. Estos movimientos se realizan al ritmo de la música y se repiten en secuencias para elevar la frecuencia cardíaca y quemar calorías.<br>    
    Ejercicios cardiovasculares: Además de las coreografías, se pueden incluir ejercicios cardiovasculares adicionales, como saltos, saltos de tijera, saltos en cuclillas, patadas y movimientos de boxeo. Estos ejercicios ayudan a aumentar la intensidad del entrenamiento y a acelerar el ritmo cardíaco para maximizar la quema de calorías.<br>    
    Trabajo de resistencia: Se pueden incorporar ejercicios de resistencia utilizando el propio peso corporal, como flexiones de brazos, abdominales, sentadillas y estocadas. Estos ejercicios ayudan a fortalecer y tonificar los músculos, además de contribuir a la quema de grasa.<br>    
    Intervalos de alta intensidad: Para aumentar aún más la quema de calorías, se pueden incluir intervalos de alta intensidad en la rutina. Esto implica alternar períodos cortos de ejercicio de alta intensidad con períodos de recuperación activa o ejercicio de menor intensidad. Los intervalos de alta intensidad ayudan a acelerar el metabolismo y a quemar más grasa durante y después del entrenamiento.<br>    
    Enfriamiento y estiramientos: Al finalizar la rutina, se dedica tiempo a un enfriamiento gradual que incluye movimientos de menor intensidad y ejercicios de estiramiento para ayudar a reducir la tensión muscular, mejorar la flexibilidad y promover la recuperación.<br>    
    Es importante recordar que cada persona tiene diferentes niveles de condición física, por lo que es recomendable adaptar la intensidad y la duración de la rutina según las capacidades individuales. Además, se recomienda combinar la gimnasia aeróbica con una alimentación saludable y equilibrada para obtener mejores resultados en la pérdida de peso. Siempre es aconsejable consultar con un profesional del fitness antes de comenzar cualquier programa de ejercicio.`,
    5,
    [],
    1,
    `Como profesora de gimnasia aeróbica, mi trabajo me llena de alegría y satisfacción. Disfruto cada clase, animando a mis alumnos a moverse, sudar y divertirse mientras trabajan en su condición física. Mi pasión por la actividad física y el bienestar se refleja en mi dedicación y en la energía que transmito a mis alumnos.
    Aunque amo mi trabajo, los fines de semana los reservo para pasar tiempo de calidad con mi familia. Valorando los lazos familiares y las relaciones cercanas, encuentro gran felicidad en compartir momentos especiales con mis seres queridos. Ya sea disfrutando de una comida en casa, organizando actividades al aire libre o simplemente relajándonos juntos, esos momentos son preciosos para mí.
    En mis tiempos libres, tengo una pasión por la lectura. Los libros de novelas son mi refugio y una forma de desconectar del mundo exterior. Me encanta sumergirme en historias cautivadoras, explorar nuevos mundos y conocer personajes fascinantes. La lectura me brinda una oportunidad de expansión mental, de relajación y de enriquecimiento personal.
    En definitiva, como profesora de gimnasia aeróbica, encuentro equilibrio en mi vida al dedicar los fines de semana a mi familia, valorando los momentos compartidos y cultivando conexiones cercanas. Y en mis tiempos libres, disfruto perdiéndome en las páginas de una novela, permitiéndome explorar diferentes mundos y sumergirme en historias fascinantes.`
  );
  listaServicios.push(servicioNuevo4);
  guardarEnLocalstorage();
  crearFila(servicioNuevo4, listaServicios.length);
  localStorage.setItem("bandera", true );
}
}
function crearFila(servicio, fila) {
  let tablaServicio = document.getElementById("tablaServicio");
  tablaServicio.innerHTML += `<tr>
    <th scope="row" class="text-center">${servicio.servicioNombre}</th>
    <td class="tdImage text-center"> 
    <img src=" ${servicio.imagen} " class="adminImg text-center" alt=" ${servicio.servicioNombre}">
    </td>
    <td class="text-center">${servicio.profesor}</td>
    <td class="text-center">${servicio.categoria}</td>
    <td class="text-center"><i class="bi bi-currency-dollar"> ${servicio.precio}</i></td>
    <td class="text-center"><i class="bi bi-clock"> ${servicio.tiempo}dia(s)</i></td>
    <td class="text-center">
        <button class="btn btn-warning text-dark" onclick="prepararFormularioServicio('${servicio.id}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-danger" onclick="borrarServicio('${servicio.id}','${servicio.servicioNombre}')"><i class="bi bi-x-square"></i></button>
    </td>
</tr>`;
}
formServicio.addEventListener("submit", prepararFormularioServicio);
btnCrearServicio.addEventListener("click", desplegarmodalServicio);

function desplegarmodalServicio() {
  limpiarFormulario();
  altaServicio = true;
  modalServicio.show();
}

function prepararFormularioServicio(e) {
  e.preventDefault();
  if (altaServicio) {
    crearServicio();
  } else {
    editarServicio();
  }
}
function crearServicio() {
  const modalSuccess= Swal.mixin({
    customClass: {
        title:"text-success-emphasis",
        closeButton: 'text-danger',
        confirmButton: 'btn btn-success mx-2'
    },
    buttonsStyling: false,
    showCloseButton: true,
    color:"var(--bs-success-text-emphasis)",
    background: "var(--bs-success-bg-subtle)",
    iconColor:"var(--bs-success-text-emphasis)",
  })
  const resumen = resumenValidacion(servicioNombre.value,profesor.value,descripcion.value,socialProf.value,tiempo.value,precio.value,imagen.value,revision.value,descripcionProfesional.value);
  mostrarMensaje(resumen);
  if(resumen.length === 0){
  const servicioNuevo = new Servicio(
    undefined,
    servicioNombre.value,
    profesor.value,
    imagen.value,
    socialProf.value,
    precio.value,
    tiempo.value,
    categoria.value,
    descripcion.value,
    revision.value,
    [],
    0,
    descripcionProfesional.value
  );
  listaServicios.push(servicioNuevo);
  guardarEnLocalstorage();
  crearFila(servicioNuevo, listaServicios.length);
  modalSuccess.fire(
    "Servicio creado",
    "El Servicio nuevo fue creado exitosamente",
    "success"
  );
    limpiarFormulario();
    modalServicio.hide();
  }
}
function mostrarMensaje(resumen){
  if(resumen.length>0){
    alertaaModal.className="d-block alert alert-danger mt-3";
    alertaaModal.innerHTML=resumen;
  } else{
    alertaaModal.className='alert alert-danger mt-3 d-none';
  } 
}
function guardarEnLocalstorage() {
  localStorage.setItem("listaServicios", JSON.stringify(listaServicios));
}
function limpiarFormulario() {
  formServicio.reset();
}
window.borrarServicio = (idServicio,nombreServicio) => { 
    const modalBorrar = Swal.mixin({
        customClass: {
            title:"text-warning-emphasis",
            confirmButton: 'btn btn-success mx-2',
            cancelButton: 'btn btn-danger mx-2',
            closeButton: 'text-danger',
        },
        buttonsStyling: false,
        color:"var(--bs-warning-text-emphasis)",
        background: "var(--bs-warning-bg-subtle)",
        icon: "warning",
        iconColor:"var(--bs-warning-text-emphasis)",
        showCloseButton: true,
        showCancelButton: true,
        reverseButtons: true
      })
    const modalSuccess= Swal.mixin({
        customClass: {
            title:"text-success-emphasis",
            closeButton: 'text-danger',
            confirmButton: 'btn btn-success mx-2'
        },
        buttonsStyling: false,
        showCloseButton: true,
        color:"var(--bs-success-text-emphasis)",
        background: "var(--bs-success-bg-subtle)",
        iconColor:"var(--bs-success-text-emphasis)",
      })
      modalBorrar.fire({
      title: `¿Esta seguro de borrar el servicio "${nombreServicio}"?`,
      text: "No podrás recuperar los datos luego de eliminar el servicio",
      confirmButtonText: "Borrar Servicio",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then((result) => { 
      if (result.isConfirmed) {
        let posicionServicio = listaServicios.findIndex(
          (servicio) => servicio.id === idServicio
        );
        listaServicios.splice(posicionServicio, 1);
        guardarEnLocalstorage();
        let tablaServicio = document.getElementById("tablaServicio");
        tablaServicio.removeChild(tablaServicio.children[posicionServicio]);
        modalSuccess.fire(
          "Servicio eliminado.",
          "El servicio fué eliminado correctamente.",
          "success"
        );
      }
    }) ;
  };
window.prepararFormularioServicio = (idServicio) => {
  const servicioEncontrado = listaServicios.find(
    (servicio) => servicio.id === idServicio
  );
  id.value = servicioEncontrado.id;
  servicioNombre.value = servicioEncontrado.servicioNombre;
  profesor.value = servicioEncontrado.profesor;
  imagen.value = servicioEncontrado.imagen;
  socialProf.value = servicioEncontrado.socialProf;
  precio.value = servicioEncontrado.precio;
  tiempo.value = servicioEncontrado.tiempo;
  categoria.value = servicioEncontrado.categoria;
  descripcion.value = servicioEncontrado.descripcion;
  revision.value = servicioEncontrado.revision;
  descripcionProfesional.value=servicioEncontrado.descripcionProfesional;
  modalServicio.show();
  altaServicio = false;
};

function editarServicio() {
  const modalSuccess= Swal.mixin({
    customClass: {
        title:"text-success-emphasis",
        closeButton: 'text-danger',
        confirmButton: 'btn btn-success mx-2'
    },
    buttonsStyling: false,
    showCloseButton: true,
    color:"var(--bs-success-text-emphasis)",
    background: "var(--bs-success-bg-subtle)",
    iconColor:"var(--bs-success-text-emphasis)",
  })
  let posicionServicio = listaServicios.findIndex(
    (servicio) => servicio.id === id.value
  );
  const resumen = resumenValidacion(servicioNombre.value,profesor.value,descripcion.value,socialProf.value,tiempo.value,precio.value,imagen.value,revision.value,descripcionProfesional.value);
  mostrarMensaje(resumen);
  if(resumen.length===0){
  listaServicios[posicionServicio].servicioNombre = servicioNombre.value;
  listaServicios[posicionServicio].imagen = imagen.value;
  listaServicios[posicionServicio].descripcion = descripcion.value;
  listaServicios[posicionServicio].categoria = categoria.value;
  listaServicios[posicionServicio].profesor = profesor.value;
  listaServicios[posicionServicio].socialProf = socialProf.value;
  listaServicios[posicionServicio].tiempo = tiempo.value;
  listaServicios[posicionServicio].precio = precio.value;
  listaServicios[posicionServicio].revision = revision.value;
  listaServicios[posicionServicio].descripcionProfesional=descripcionProfesional.value;
  guardarEnLocalstorage();
  let tablaServicio = document.getElementById("tablaServicio");
  tablaServicio.children[posicionServicio].children[0].innerHTML =
    servicioNombre.value;
  tablaServicio.children[posicionServicio].children[1].children[0].setAttribute(
    "src",
    imagen.value
  );
  tablaServicio.children[posicionServicio].children[2].innerHTML =
    profesor.value;
  tablaServicio.children[posicionServicio].children[3].innerHTML =
    categoria.value;
  tablaServicio.children[posicionServicio].children[4].children[0].innerHTML =
    precio.value;
  tablaServicio.children[posicionServicio].children[5].children[0].innerHTML =
    tiempo.value+' dia(s)';
  modalSuccess.fire(
    "Servicio modificado",
    "El Servicio fue modificado exitosamente",
    "success"
  );
  limpiarFormulario();
  modalServicio.hide();
  }
}
