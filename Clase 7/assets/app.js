//Aquí vimos el operador &&
const entrarAlBar = (edad, pago) => {
  if (edad >= 18 && pago == true) {
    console.log("Puede entrar al bar");
  } else {
    console.log("No puede entrar al bar");
  }
};
const validarPago=(caracter)=>{
    if(caracter===true||caracter==="verdadero"){
        return true
    }else{
        return false
    }
}
let edadPersona = Number(prompt("Ingrese su edad"));
let pagoEntrada = validarPago(prompt("¿¿Usted pago??"));

entrarAlBar(edadPersona, pagoEntrada);

console.log(true && true);
console.log(true && false);
console.log(false&&true);
console.log(false && false);