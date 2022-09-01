class Personas {

  constructor(nombre, ciudad, edad, genero) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.edad = edad;
    this.genero = genero;
  }
  caminar(){
    return (`${this.nombre} esta caminando`)
  }

  get obtenerEdad(){
    return this.edad
  }
  get obtenerGenero(){
    return this.genero
  }

  set establecerNombre(nombre){
    this.nombre=nombre
  }
}
const persona1 = new Personas("Steven Zuluaga", "Medellin", 26, "Masculino");

const persona2 = new Personas("Yinier", "Medellin", 19, "Macho");
persona2.establecerNombre="Yeison"
console.log(persona2)