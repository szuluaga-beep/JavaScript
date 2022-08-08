let titulos=document.querySelectorAll('h1')

for (let i = 0; i < titulos.length; i++) {
    titulos[i].className="titulo"
    
}

titulos[1].id="titulo1"
titulos[2].id="titulos2"

console.log(titulos)

let imagen=document.getElementById("imagen")

imagen.setAttribute("src","https://www.portafolio.co/files/article_multimedia/uploads/2022/08/07/62efed37622f3.jpeg")



let enlace=document.querySelector("a")
enlace.setAttribute("href","https://www.google.com/")











