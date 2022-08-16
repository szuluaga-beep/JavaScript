const json = `{"nombre":"Steven Zuluaga Cortes","edad":26,"cedula":123,"habilidades":["HTML","CSS","JS"]}`;

const objJSON = JSON.parse(json);

objJSON.edad > 25 ? console.log("Edad mayor") : console.log("Hola");
