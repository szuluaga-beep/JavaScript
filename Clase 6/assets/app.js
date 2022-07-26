//ciclo for en javascript
let cont=0,acum=0;
for (let i = 0; i <=100; i++) {
    //acum=acum+i
    acum+=i
    if (i%2==0) {
        console.log(`El número ${i} es par`)
    }else{
        console.log(`El número ${i} es impar`)
    }
    
}
console.log(`EL acumulador está en: ${acum}`)

// funcion para saber si un número es par

const isPair=(num)=>{
    if (num%2==0) {
        console.log("El número es par");
    }else{
        console.log("El número es impar")
    }
}

isPair(122);
isPair(125);