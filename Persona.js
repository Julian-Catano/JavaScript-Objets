class Persona {
    #nombre=''
    #edad=''
    #fechaNacimiento=''
    constructor(nombre, edad, fechaNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#fechaNacimiento = fechaNacimiento;
    }

    establecerNombre(nombre){
        if(this.#nombre !== ""){
            this.#nombre=nombre
        }else{
            return alert("Brodel ta vacio")
        }
    }
    obtenerNombre(nombre){

        if(this.#nombre === ''){
            console.log("Ta vacio manetoo")
        }
        
        return this.#nombre
        
    }
    establecerEdad(edad){
    
        if(this.#edad < 0){
            alert("No se puede esa edad brodel")
        }
        return this.#edad
       
    }

    obtenerEdad(){
        if(this.#edad === ""){
            alert("No se puede esa edad brodel")
        }else{
            return this.#edad
        }
        
    }

    establecerFechaNacimiento(fechaNacimiento){

        if(this.#fechaNacimiento > new Date()){
            alert("No se puede esa fecha brodel")
        } else{
            this.#fechaNacimiento=fechaNacimiento
        } 
        
    }

    
    obtenerFechaNacimiento(){
        if(this.#fechaNacimiento > new Date()){
            alert("No se puede esa fecha brodel")
        } else{
            return this.#fechaNacimiento
        } 
    }

    calcularFechaNacimiento(fechaNacimiento){
        if (this.#fechaNacimiento === ""){
            console.error("La fecha de nacimiento no puede estar vacía");
            return
        }
        let feNacimiento = new Date(this.#fechaNacimiento);
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - feNacimiento.getFullYear();
        if (
          fechaActual.getMonth() < feNacimiento.getMonth() ||
          (fechaActual.getMonth() === feNacimiento.getMonth() &&
            fechaActual.getDate() < feNacimiento.getDate())
        ) {
          edad--;
        }
        return edad;
    }
    



    

}


module.exports = Persona;

