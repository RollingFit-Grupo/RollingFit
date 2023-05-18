const parametroURL = new URLSearchParams(window.location.search);
console.log(parametroURL);
console.log(parametroURL.get("id"));

//Obtiene json con key listaServicios y se lo parsea en objeto javascript
let listaServicio = JSON.parse(localStorage.getItem("listaServicios")) || [];
const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === parametroURL.get("id")
);

// Dibujar la card con los datos
let seccion = document.querySelector("#seccionDetalle");
seccion.innerHTML = `<section class="my-5 row position-relative">
<div
  class="col-lg-8 order-lg-1 d-flex flex-column align-items-center"
>
  <div class="row">
    <div class="px-lg-3 text-center">
      <p class="text-muted" id="codigoUnico">${servicioBuscado.id}</p>
      <h1 class="display-4 mb-4 text-break" id="nombre">${servicioBuscado.categoria} - ${servicioBuscado.servicioNombre}</h1>
      <img
        src="${servicioBuscado.imagen}"
        alt="Imagen (cargada con url)"
        class="img-fluid rounded-3"
      />
    </div>
  </div>
  <div class="row d-flex flex-column align-items-center">
    <div
      class="col-lg-12 px-lg-3 d-flex flex-column align-items-center mt-2"
    >
      <h3 class="mb-3" id="descripcion">Descripción:</h3>
      <p class="lead mb-4 text-wrap text-break">
        ${servicioBuscado.descripcion}
      </p>
    </div>
    <!--Div Profesor-->
  </div>
</div>
<div class="col-lg-4 order-lg-2 position-sticky rounded-3 pb-5 text-center">
  <div class="p-3 sticky-top">
  <div
  class="tab-pane fade show active"
  id="nav-basic"
  role="tabpanel"
  aria-labelledby="nav-basic-tab"
  tabindex="0"
>
  <h3 class="py-1"><strong>COMPRAR</strong> ${servicioBuscado.servicioNombre}</h3>
  <h4><strong>Total:</strong> US$${servicioBuscado.precio}</h4>
  <h4><strong>Tiempo de entrega:</strong> ${servicioBuscado.tiempo}</h4>

  <div class="container mt-2 text-center divProfesor">
  <div class="d-flex flex-column">
    <div
      class="d-flex align-items-center justify-content-center card-integrante rounded-4"
    >
      <img
        id="imgProfesor"
        src="${servicioBuscado.socialProf}"
        alt="Imagen del profesor"
        class="img-fluid"
      />
    </div>
    <div
      class=" d-flex align-items-center justify-content-center py-3"
    >
      <h3 id="nombreProfesor" class="text-break fw-bolder">${servicioBuscado.profesor}</h3>
    </div>
    <div
      class="d-flex align-items-center justify-content-center text-center p-3"
    >
      <p id="descripcionProfesor" class="text-break">
        ${servicioBuscado.descripcionProfesional}
      </p>
    </div>
  </div>

  <div class=" mb-4 px-lg-3">
  <h3 class="mb-3 text-break" id="categoria">Tipo de Categoria ${servicioBuscado.servicioNombre}</h3>
  <!--Caracteristicas-->
  <!--Caracteristicas-->
</div>

<div class="text-center">
<button class="btn btn-primary btn-lg">
  Añadir al carro
</button>
</div>
</div>
</div>
</div>
</section>
<article>
        <section class="container">
          <h3>Deje su reseña!</h3>
          <form action="" class="row m-3" id="formComentario">
            <div class="mb-3">
              <div class="d-flex flex-column flex-sm-row">
                <span class="input-group-text  flex-column">
                  <i class="bi bi-person h2 m-0 mb-0"></i>
                </span>
                <textarea
                  class="form-control flex-grow-1"
                  aria-label="With textarea"
                  id="TextAreaUsuario"
                  placeholder="nombre de usuario"
                  disabled
                  minlength="5"
                  maxlength="200"
                >mail@delusuario.com</textarea>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex flex-column flex-sm-row">
                <span class="input-group-text flex-column">
                  <i class="bi bi-chat-right-text h2 m-0 mb-0"></i>
                </span>
                <textarea
                  class="form-control flex-grow-1"
                  aria-label="With textarea"
                  id="TextAreaComentario"
                  placeholder="(Maximo 200 caracteres)"
                  minlength="5"
                  maxlength="200"
                ></textarea>
              </div>
            </div>
            <div class="mb-3">
              <div class="d-flex flex-column flex-sm-row">
                <span class="input-group-text flex-column">
                  <i class="bi bi-stars h2 m-0 mb-0"></i>
                </span>
                <div class="puntaje-wrapper"> 
                  <div class="puntaje d-flex justify-content-center py-2 input-group-text mantenerHover">
                    <span data-puntaje="5" class="display-3">&#9733;</span>
                    <span data-puntaje="4" class="display-3">&#9733;</span>
                    <span data-puntaje="3" class  ="display-3">&#9733;</span>
                    <span data-puntaje="2" class="display-3">&#9733;</span>
                    <span data-puntaje="1" class="display-3">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <button type="submit" class="btn btn-primary mb-3">Publicar</button>
            </div>
          </form>
        </section>
        <section class="container">
          <h3>Reseñas</h3>
          <ul id="resenias"></ul>
        </section>
      </article>`;

/*<div id="caracteristicas" class="">
    <h5>Caracteristicas</h5>
    <div id="cardiovascular" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div id="cardioVascularBarra"
        class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-success"
        style="width: 100%">Cardiovascular</div>
    </div>
    <div id="fuerza" class="progress mb-1" role="progressbar" aria-label="Animated striped example "
      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div id="fuerzaBarra"
        class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-danger"
        style="width: 40%">Fuerza</div>
    </div>
    <div id="aerobico" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div id="aerobicoBarra"
        class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-primary"
        style="width: 80%">Aerobico</div>
    </div>
    <div id="" class="progress mb-1" role="progressbar" aria-label="Animated striped example"
      aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div id=""
        class="progress-bar progress-bar-striped progress-bar-animated text-start ps-2 bg-secondary"
        style="width: 60%">Flexibilidad
      </div>
    </div>
  </div>*/
