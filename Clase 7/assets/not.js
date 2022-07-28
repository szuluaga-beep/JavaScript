const validarEdad=(edad)=>{
    if (edad>=18) {
        return true
    }else{
        return false
    }
}
console.log(validarEdad(16))
console.log(!validarEdad(18))
