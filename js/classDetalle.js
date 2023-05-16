export default class Servicio {
  #id;
  #servicioNombre;
  #profesor;
  #imagen;
  #socialProf;
  #precio;
  #tiempo;
  #categoria;
  #descripcion;
  #revision;
  #resenia;
  #descripcionProfesional;
  #calificacion;
  constructor(
    id = uuidv4(),
    servicioNombre,
    profesor,
    imagen,
    socialProf,
    precio,
    tiempo,
    categoria,
    descripcion,
    revision,
    resenia,
    calificacion,
    descripcionProfesional
  ) {
    this.#id = id;
    this.#servicioNombre = servicioNombre;
    this.#profesor = profesor;
    this.#imagen = imagen;
    this.#socialProf = socialProf;
    this.#precio = precio;
    this.#tiempo = tiempo;
    this.#categoria = categoria;
    this.#descripcion = descripcion;
    this.#revision = revision;
    this.#calificacion = calificacion;
    this.#resenia = resenia;
    this.#descripcionProfesional = descripcionProfesional;
  }
  get id() {
    return this.#id;
  }

  get servicioNombre() {
    return this.#servicioNombre;
  }

  get profesor() {
    return this.#profesor;
  }

  get imagen() {
    return this.#imagen;
  }

  get socialProf() {
    return this.#socialProf;
  }

  get precio() {
    return this.#precio;
  }

  get tiempo() {
    return this.#tiempo;
  }

  get categoria() {
    return this.#categoria;
  }

  get descripcion() {
    return this.#descripcion;
  }
  get revision() {
    return this.#revision;
  }

  get calificacion(){
        return this.#calificacion;
    } 
  get resenia(){
      return this.#resenia;
  }
  get descripcionProfesional(){
    return this.#descripcionProfesional;
}
  // Setters
  set id(id) {
    this.#id = id;
  }

  set servicioNombre(servicioNombre) {
    this.#servicioNombre = servicioNombre;
  }

  set profesor(profesor) {
    this.#profesor = profesor;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  set socialProf(socialProf) {
    this.#socialProf = socialProf;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  set tiempo(tiempo) {
    this.#tiempo = tiempo;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }
  set revision(revision) {
    this.#revision = revision;
  }
  set calificacion(calificacion){
        this.#calificacion=calificacion;
    } 
    set resenia(resenia){
      this.#resenia=resenia;
  }
  set descripcionProfesional(descripcionProfesional){
    this.#descripcionProfesional=descripcionProfesional;
}
  toJSON() {
    return {
      id: this.id,
      servicioNombre: this.servicioNombre,
      profesor: this.profesor,
      imagen: this.imagen,
      socialProf: this.socialProf,
      precio: this.precio,
      tiempo: this.tiempo,
      categoria: this.categoria,
      descripcion: this.descripcion,
      revision: this.revision,
      calificacion: this.calificacion,
      resenia: this.resenia,
      descripcionProfesional: this.descripcionProfesional
    };
  }
}
