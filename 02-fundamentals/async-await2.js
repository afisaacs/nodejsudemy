let empleados = [
  {
    id: 1,
    nombre: "Aaron"
  },
  {
    id: 2,
    nombre: "Kathe"
  },
  {
    id: 3,
    nombre: "Juan"
  }
];

let salarios = [
  {
    id: 1,
    salario: 100
  },
  {
    id: 2,
    salario: 100
  }
];

const getEmpleado = async id => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      throw new Error(`No existe un empleado con el ID ${id}`)
    }
    return empleadoDB;
};

const getSalario = async empleado => {
    let salarioDB = salarios.find(salario => empleado.id === salario.id);
    if (!salarioDB) {
      throw new Error(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
    }
    return { nombre: empleado.nombre, salario: salarioDB.salario };
};

let getInformacion = async id => {
  let empleado = await getEmpleado(id);
  let respuesta = await getSalario(empleado);
  return `El empleado ${respuesta.nombre} tiene un salario de $${respuesta.salario}`;
}

getInformacion(1)
.then(mensaje => console.log(mensaje))
.catch(err => console.log(err));
