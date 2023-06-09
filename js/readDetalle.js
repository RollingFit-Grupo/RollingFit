const parametroURL = new URLSearchParams(window.location.search);

let listaServicio = JSON.parse(localStorage.getItem("listaServicios")) || [];
const servicioBuscado = listaServicio.find(
  (servicio) => servicio.id === parametroURL.get("id")
);
let email;
if (sessionStorage.getItem("user-session")) {
  const sessionData = JSON.parse(sessionStorage.getItem("user-session"));
  email = sessionData.email;
}
let seccion = document.querySelector("#seccionDetalle");
seccion.innerHTML = `<section class="my-5 row position-relative">
<div
  class="col-lg-8 order-lg-1 d-flex flex-column align-items-center"
>
  <div class="row">
    <div class="px-lg-3 text-center">
      <p class="text-muted" id="codigoUnico">${servicioBuscado.id}</p>
      <h1 class="display-4 mb-4 text-break" id="nombre">${
        servicioBuscado.categoria
      } - ${servicioBuscado.servicioNombre}</h1>
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
<div class="col-lg-4 order-lg-2 position-sticky rounded-3 pb-5 text-center card rounded-5 h-100 shadow bg-secondary-subtle fade-izquierda card-valores mostrar">
  <div class="p-3 sticky-top">
  <div
  class="tab-pane fade show active"
  id="nav-basic"
  role="tabpanel"
  aria-labelledby="nav-basic-tab"
  tabindex="0"
>
  <h3 class="py-1"><strong>COMPRAR</strong> ${
    servicioBuscado.servicioNombre
  }</h3>
  <h4><strong>Total:</strong> <span class="text-secondary fw-bold">$${
    servicioBuscado.precio
  }</span></h4>
  <h4><strong>Tiempo de entrega:</strong> <span class="text-secondary fw-bold">${
    servicioBuscado.tiempo
  } Dias</span></h4>

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
      class=" d-flex align-items-center justify-content-center py-1 bg-secondary rounded-2"
    >
      <h3 id="nombreProfesor" class="text-break fw-bolder">${
        servicioBuscado.profesor
      }</h3>
    </div>
    <div
      class="d-flex align-items-center justify-content-center text-center p-3 border-primary-subtle"
    >
      <p id="descripcionProfesor" class="text-break">
        ${servicioBuscado.descripcionProfesional}
      </p>
    </div>
  </div>
  </div>

  <div class=" mb-4 px-lg-3">
  <h3 class="mb-3 text-break" id="categoria">Tipo de Categoria: <br> ${
    servicioBuscado.categoria
  }</h3>
  <!--Caracteristicas-->
  <!--Caracteristicas-->
</div>

<div class="text-center">
  <a href="./error404.html" class="btn btn-primary btn-lg">Añadir al carro</a>
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
                >${email !== undefined ? email : "usuario@mail.com"}</textarea>
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
                    <span data-puntaje="5" class="h6">&#9733;</span>
                    <span data-puntaje="4" class="h6">&#9733;</span>
                    <span data-puntaje="3" class  ="h6">&#9733;</span>
                    <span data-puntaje="2" class="h6">&#9733;</span>
                    <span data-puntaje="1" class="h6">&#9733;</span>
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
