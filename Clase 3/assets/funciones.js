//funcion normal
function saludar(){
    console.log('"Hola Mundo"')
}

// saludar();
// saludar();
// saludar();

// funcion tipo flecha
const saludo=(nombre)=>{
 console.log(`Hola ${nombre}`)
}

saludo("Juan");
saludo("Isabella");
saludo("Santiago");

function sumar(){
    let suma=2+3;
    console.log(suma)
}

sumar()

const suma=(num1,num2)=>{
    let resultado=num1+num2;
    console.log(resultado)
}

suma(5,10)
suma(10,90)

const multiplicar=(num1,num2)=>{
    let resultado=num1*num2
    // console.log(resultado)
    return resultado
}

multiplicar(50,10)
multiplicar(10,9)

let resultadoMultiplicacion=multiplicar(50,10)

console.log(`El resultado de la multiplicacion es; ${resultadoMultiplicacion}`)