class Emplea2{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }


}

class Gerente extends Emplea2{
    constructor(nombre, salario, bono){
        super(nombre, salario);
        this.bono = bono;
    }
    



    
}
class Vendedor extends Emplea2{
    constructor(nombre, salario, comision){
        super(nombre, salario);
        this.comision = comision;
    }


}

