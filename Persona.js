class Persona{
    #nombre=''
    #edad=''
    #fechaNacimiento=''
    constructor(nombre, edad, fechaNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#fechaNacimiento = fechaNacimiento;
    }

    establecerNombre(nombre){
        if(nombre !== ""){
            this.#nombre=nombre
        }else{
            return alert("Brodel ta vacio")
        }
    }
    obtenerNombre(nombre){

        if(nombre !== ""){
            return this.#nombre
        }else{
            alert("Ta vacio manetoo")
        }
        
    }
    establecerEdad(edad){
    
        if(edad < 0){
            alert("No se puede esa edad brodel")
        }else{
            this.#edad=edad
        } // La edad no puede ser negativa y menor a 18 años
       
    }

    obtenerEdad(edad){
        if(edad < 0){
            alert("No se puede esa edad brodel")
        }else{
            return this.#edad=edad
        }
    }

    establecerFechaNacimiento(fechaNacimiento){

        if(fechaNacimiento > new Date()){
            alert("No se puede esa fecha brodel")
        } else{
            this.#fechaNacimiento=fechaNacimiento
        } 
        
    }

    
    obtenerFechaNacimiento(fechaNacimiento){
        if(fechaNacimiento > new Date()){
            alert("No se puede esa fecha brodel")
        } else{
            return this.#fechaNacimiento=fechaNacimiento
        } 
    }

    calcularFechaNacimiento(fechaNacimiento){
        if (this.#fechaNacimiento === ""){
            console.error("La fecha de nacimiento no puede estar vacía");
            return
        }
        let fechaNacimiento = new Date(this.#fechaNacimiento);
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        if (
          fechaActual.getMonth() < fechaNacimiento.getMonth() ||
          (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
            fechaActual.getDate() < fechaNacimiento.getDate())
        ) {
          edad--;
        }
        return edad;
    }
    



    

}

module.exports = Persona;