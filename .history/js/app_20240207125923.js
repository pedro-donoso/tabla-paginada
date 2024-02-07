import {traerData} from './api-fetch.js'

const info = await traerData();

console.log(info);

const cuerpoTabla = document.querySelector('#cuerpo-tabla');

// Variables para la paginación
let limite = 5
let desde = 0
let paginas = 