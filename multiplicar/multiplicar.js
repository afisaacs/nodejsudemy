const fs = require('fs');

const crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} No es un numero`);
      return;
    } else if (!Number(limite)) {
      reject(`El valor introducido ${base} No es un numero`);
      return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, err => {
      if (err) reject(err);
      resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};

const listarTabla = (base, limite = 10) => {
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

module.exports = { crearArchivo, listarTabla };
