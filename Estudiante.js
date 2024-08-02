const Persona = require('./Persona.js')

class Estudiante extends Persona {
    constructor(nombre, edad, fechaNacimiento, grado){
        this.grado = grado;
    }

    toString(){
        return `${super.toString()}, Estudiante: ${this.Estudiante}`;
    }



}