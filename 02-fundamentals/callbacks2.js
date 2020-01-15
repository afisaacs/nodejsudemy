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

const getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

const getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => empleado.id === salario.id);
  if (!salarioDB) {
    callback(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
  } else {
    callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
  }
};

getEmpleado(1, (err, empleadoDB) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(empleadoDB));
    getSalario(empleadoDB, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(resp));
      }
    });
  }
});
