const Persona = require('./Persona')
class Empleado extends Persona {
    constructor(nombre, edad, fechaNacimiento, Rama){
        super(nombre, edad, fechaNacimiento);
        this.Rama = Rama;
    }

    toString(){
        return `${super.toString()}, Rama: ${this.Rama}`;
    }

    realizarTarea(){
        console.log("Realizando tarea laboral");
    }
    
    

}

module.exports = Empleado;

// const empleado = new Empleado ("Julian", 19, "2005-29-03", "Contratista");
// console.log(empleado)

// empleado.realizarTarea(); 