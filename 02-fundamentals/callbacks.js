// setTimeout(() => {
//   console.log('Hola mundo');
// }, 200);

const getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: 'Aaron',
    id
  }
  if (id === 20) {
    callback(`El usuario con id ${id} no existe en la base de datos`)
  } else {
    callback(null, usuario);
  }
}

getUsuarioById(10, (err, usuario) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Usuario de base de datos: ${usuario.nombre}`)
  }
});
