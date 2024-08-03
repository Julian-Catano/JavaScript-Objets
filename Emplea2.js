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
    

    calcularSueldoG(nombre){
        return this.salario + this.bono;
    }

    toString(){
        return `${super.toString()}, salario: ${this.salario}`;
    }

    
}
class Vendedor extends Emplea2{
    constructor(nombre, salario, comision){
        super(nombre, salario);
        this.comision = comision;
    }

    calcularSueldoV(){
        return this.nombre, this.salario + this.comision
    }

    toString(){
        return `${super.toString()}, salario: ${this.salario}`;
    }
}

const gerente = new Gerente("julian", 1300000, 300000)
console.log(gerente.calcularSueldoG())
const vendedor = new Vendedor("estiven", 1300000, 30000)
console.log(vendedor.calcularSueldoV())