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


    

}