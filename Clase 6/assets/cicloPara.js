let numeros=[5,2,3,4,1,3]

console.log(numeros)//Imprime el vector
console.log(numeros.length)//Imprime el tamaño del vector

console.warn("Ciclo para con vector")
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]*2)    
}
console.warn("For of")
for (const numero of numeros) {
    console.log(numero)
}
console.warn("For in")

for (const key in numeros) {
    if (key==2) {
        console.log(numeros[key])
    }
}
console.warn("foreach")

numeros.forEach(element => {
    console.log(element)
});


