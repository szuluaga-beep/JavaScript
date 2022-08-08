document.getElementById("titulo").classList.remove('titulo')

let titulos=document.querySelectorAll('h1')

titulos.forEach(element=>{
    element.classList.add("titulo2")
})

console.log(titulos[0].classList.contains("titulo2"))

titulos[1].classList.toggle("titulo")