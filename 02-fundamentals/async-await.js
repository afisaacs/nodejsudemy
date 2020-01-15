// let getNombre = async () => {
//   // throw new Error('No existe un nombre para ese usuario');
//   return 'Aaron';
// };

let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fernando');
    }, 300);
  })
};

let getSaludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
}

getSaludo()
.then(mensaje => console.log(mensaje));
