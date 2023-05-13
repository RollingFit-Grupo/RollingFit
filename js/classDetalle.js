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
    #revision
//    #calificacion;
    constructor(id = uuidv4(), servicioNombre, profesor, imagen, socialProf, precio, tiempo, categoria, descripcion,revision) {
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

/*     getCalifcacion(){
        return this.#calificacion;
    } */
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
/*     setCalificacion(calificacion){
        this.#calificacion=calificacion;
    } */
    toJSON(){
        return{
            id: this.id,
            servicioNombre: this.servicioNombre,
            profesor: this.profesor,
            imagen: this.imagen,
            socialProf: this.socialProf,
            precio: this.precio,
            tiempo: this.tiempo,
            categoria: this.categoria,
            descripcion: this.descripcion,
            revision: this.revision
        }
    }
}
