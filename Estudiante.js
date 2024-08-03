const Persona = require('./Persona.js')
const Trabajador = require('./Trabajador.js')

class Estudiante extends Persona {
    constructor(nombre, edad, fechaNacimiento, grado){
        super(nombre, edad, fechaNacimiento);
        this.grado = grado;
    }

    toString(){
        return `${super.toString()}, grado: ${this.grado}`;
    }

    realizarTarea(){
        console.log("Realizando tarea escolar");
    }
    
    

}

const estudiante = new Estudiante ("Julian", 19, "2005-29-03", "1to");
// console.log(estudiante.calcularFechaNacimiento())
// estudiante.realizarTarea();


module.exports = Estudiante 