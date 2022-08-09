//Evento onload
//document.body.addEventListener("onload",alert("Hola"))

// document.querySelector("#boton").addEventListener("click",(e)=>{
//     alert(e.target.textContent)
// })
let age = document.querySelector("#age")
let boton = document.querySelector("button")

boton.addEventListener("click",()=>{
    alert(`Su edad es: ${age.value}`)
})