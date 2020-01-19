const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    console.log(`crear, base: ${argv.base}, limite: ${argv.limite}`);
    crearArchivo(argv.base, argv.limite)
      .then(nombreArchivo => console.log(`archivo creado: ${nombreArchivo}.txt`))
      .catch(err => console.log(err));
    break;
  default:
    console.log('comando no reconocido');
}
