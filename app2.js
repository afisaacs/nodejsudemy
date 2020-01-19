//requireds
// const fs = require('fs'); // require de proyecto propio de node
// const express = require('express') // expanciones de node que otras personas hicieron
// const express = require('./service') // archivos locales creados por nosotros
const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
      demand: true,
      alias: 'b',
    },
    limite: {
      alias: 'l',
      default: 10,
    },
  })
  .help().argv;

console.log(argv);
console.log(argv.base);
console.log('Limite', argv.limite);

// let argv2 = process.argv
// console.log(argv2)

// console.log(process.argv);
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(base)

// crearArchivo(base)
//     .then(nombreArchivo => console.log(`archivo creado: ${nombreArchivo}.txt`))
//     .catch(err => console.log(err))
