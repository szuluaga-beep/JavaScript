// let lista=document.querySelector("#lista")

// let elementos=document.querySelectorAll(".elemento")

// for (let i = 0; i < elementos.length; i++) {
   
//     lista.removeChild(elementos[i])
// }
// let lista=document.querySelector("#lista")

// for (let i = 1; i <= 100; i++) {
    
//     let elemento=document.createElement("li")
//     elemento.innerHTML=i
//     lista.appendChild(elemento)
// }


let skills=["HTML","CSS","JS","REACT","English","Habilidades blandas"]

let lista=document.querySelector("#lista")

skills.forEach(element=>{
    let li=document.createElement("li")
    li.innerHTML=element.toUpperCase()
    lista.appendChild(li)
})




