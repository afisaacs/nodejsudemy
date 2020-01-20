const argv = require('yargs');

const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completada o pendiente la tarea',
};

argv
  .command('crear', 'Crear un elemento por hacer', { descripcion })
  .command('borrar', 'Borrar un elemento por hacer', { descripcion })
  .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
  .command('listar', 'Listar tareas', { completado })
  .help();

module.exports = argv;
