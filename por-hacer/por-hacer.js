const fs = require('fs');

let listadoPorHacer = [];

const crear = descripcion => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,
  };
  listadoPorHacer.push(porHacer);
  guardarDb();
  return porHacer;
};

const getListado = completado => {
  cargarDB();
  return listadoPorHacer.filter(tarea => tarea.completado === (completado === 'true'));
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if (index === -1) return false;
  listadoPorHacer[index].completado = completado;
  guardarDb();
  return true;
};

const borrar = descripcion => {
  cargarDB();
  const listadoNuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
  if (listadoNuevo.length === listadoPorHacer.length) return false;
  listadoPorHacer = listadoNuevo;
  guardarDb();
  return true;
};

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
};

const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./db/data.json', data, err => {
    if (err) throw new Error(`No se pudo guardar: ${err.message}`);
    console.log('La tarea ha sido creada');
  });
};

module.exports = { crear, getListado, actualizar, borrar };
