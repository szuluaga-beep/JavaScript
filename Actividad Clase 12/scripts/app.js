let numero=document.querySelector("#numero")
let boton1=document.querySelector("#enviar")

boton1.addEventListener("click",()=>{pintarCajas(numero)})

const pintarCajas=(num)=>{
    
    const box = document.querySelector(".box");
    const numero1=Number(num.value)
    
    for (let i = 1; i <= numero1; i++) {
      const element = document.createElement("div");
      element.innerHTML = i;
      //element.classList.add("general");
      if (i % 2 == 0) {
        element.classList.add("element");
      } else {
        element.classList.add("element1");
      }
    
      box.appendChild(element);
    }
}








