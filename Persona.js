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


