let deadpol = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre: function() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  }
};

console.log(deadpol.getNombre());

let { nombre: primerNombre, apellido, poder } = deadpol;

console.log(`nombre: ${primerNombre}, apellido: ${apellido}, poder: ${poder}`);

