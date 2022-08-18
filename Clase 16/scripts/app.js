//sessionStorage.setItem("id",123)

//console.log(sessionStorage.getItem("id"))

const usuario={
    nombre:"Steven Zuluaga",
    edad:26,
    correo:"steven@yopmail.com"
}

const jsonUsuario=JSON.stringify(usuario,undefined,4)

localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem("steven@yopmail.com"))

