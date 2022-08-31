class Persona {
  constructor(nombre, edad, genero, pais, cedula) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.pais = pais;
    this.cedula = cedula;
  }
  mostraPais() {
    console.log(this.pais);
  }
  get getGenero() {
    return this.genero;
  }
}

const persona2 = new Persona("Steven", 26, "No se sabe", "Colombia", 123);
const persona3 = new Persona("Yinier", 15, "Masculino", "Alemania", 666);

console.log(persona2.mostraPais());
console.log(persona3.getGenero);


