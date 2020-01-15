// function sumar(a, b) {
//   return a + b;
// }

// function saludar() {
//   return 'Hola mundo';
// }

let nombre = 'Aaron';

const deadpol = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre: () => `${this.nombre}`
};

const sumar = (a, b) => a + b;
const saludar = nombre => `Hola ${nombre}`;

console.log(sumar(10, 20));
console.log(saludar('Aaron'));
console.log(deadpol.getNombre());