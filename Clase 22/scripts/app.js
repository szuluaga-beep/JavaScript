const texto='Juañ'

let patron=new RegExp(/\W$/)

console.log(patron.test(texto))


const txt="Python es el mejor lenguaje de programación 2022"

const txtReplaced=txt.replace(/\d/g,"$")

console.log(txtReplaced)

const user="Steven-4535"

const patronUser=/^[a-zA-Z0-9-]{3,16}$/

console.log(patronUser.test(user))