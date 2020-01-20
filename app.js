const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
  case 'crear':
    let tareaCreada = porHacer.crear(argv.descripcion);
    console.log(tareaCreada);
    break;
  case 'listar':
    const listado = porHacer.getListado(argv.completado);
    for (const tarea of listado) {
      console.log('============= Por Hacer ============'.green);
      console.log(tarea.descripcion);
      console.log(`Estado: ${tarea.completado}`);
      console.log('===================================='.green);
    }
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log('Comando no reconocido');
}
