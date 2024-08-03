const Estudiante = require('./Estudiante.js')
const Empleado = require('./Empleado.js')

const estudiante = new Estudiante("julian", 20, "2005-29-03", "5to")
const empleado = new Empleado("julian", 20, "2005-29-03", "Contratista")


if (typeof estudiante.realizarTarea === 'function' ) {
   console.log(estudiante)
    estudiante.realizarTarea();
  }else {
    console.log("El método 'realizarTarea()' no está implementado en Estudiante.");
}

if(typeof empleado.realizarTarea === 'function') {
   console.log(empleado)
    empleado.realizarTarea();
  } else {
    console.log("El método 'realizarTarea()' no está implementado en Empleado.");
}


// En JavaScript, no puedes obligar de manera nativa a una clase a implementar una interfaz como en lenguajes fuertemente tipados (por ejemplo, TypeScript o Java). Sin embargo, puedes simular este comportamiento utilizando algunas estrategias.