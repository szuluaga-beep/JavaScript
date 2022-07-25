let age = 18;
//Condionales con if solamente
if (age >= 18) {
  //console.log("Eres mayor de edad");
  document.write("Eres mayor de edad");
}

// Condiciones con if-else

if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Condionales con switch

let personName = "Yinier";
switch (personName) {
  case "Yinier":
    console.log(`A ${personName} Le gusta el freefire`);
    break;
  case "Estevenson":
    console.log("Es el monitor de Front");
    break;
  default:
    console.log("Esta una persona");
    break;
}
//Condicional con operador ternario
let personGenre = "Hombre";

personGenre === "Mujer"
  ? console.log("Es una mujer")
  : console.log("Es un hombre");

personGenre === "Hombre"
  ? console.log("Es un hombre")
  : console.log("Es una mujer");

// operador ternario con edad

let personAge = 19;

personAge > 18 ? console.log("Mayor a 18") : console.log("Menor a 18");

let isHungry = false;

isHungry  ? console.log("Tenemos hambre") : console.log("Tenemos sueñito");
