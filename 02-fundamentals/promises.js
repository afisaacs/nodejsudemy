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

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleadoDB);
    }
  })
};

const getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => empleado.id === salario.id);
    if (!salarioDB) {
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      reject(`No existe salario para el empleado de nombre ${empleado.nombre} con el ID ${empleado.id}`);
      console.log('El reject sólo se ejcuta una vez');
    } else {
      resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
    }
  });
};

// getEmpleado(10)
// .then(empleado => {
//   console.log(JSON.stringify(empleado))
//   getSalario(empleado)
//   .then(resp => console.log(JSON.stringify(resp)))
//   .catch(err => console.log(err));
// })
// .catch(err => console.log(err));

// getEmpleado(3)
// .then(empleado => {
//   console.log(JSON.stringify(empleado))
//   getSalario(empleado)
//   .then(resp => console.log(JSON.stringify(resp)), err => console.log(err));
// }, err => console.log(err));

getEmpleado(3)
.then(empleado => getSalario(empleado))
.then(resp => console.log(`El salario de ${resp.nombre} es de ${resp.salario}$`))
.catch(err => console.log(err));
