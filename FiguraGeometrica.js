class FiguraGeometrica{
    #nombre = ''
    #color = ''
    constructor(nombre, color){
        this.#nombre = nombre
        this.#color = color
    }

    establecerNombre(nombre){
        this.#nombre = nombre
    }

    obtenerNombre(){
        return this.#nombre
    }
    establecerColor(color){
        this.#color = color
    }

    obtenerColor(){
        return this.#color
    }

}


class rectangulo extends FiguraGeometrica{
    constructor(nombre, color, longitud, ancho){
        super(nombre, color);
        this.longitud = longitud;
        this.ancho = ancho;
    }

    toString(){
        return `${super.toString()}, longitud: ${this.longitud}, ancho: ${this.ancho}`;
    }
}

class circulo extends FiguraGeometrica{
    constructor(nombre, color, radio){
        super(nombre, color);
        this.radio = radio;
    }

    toString(){
        return `${super.toString()}, radio: ${this.radio}`;
    }
}