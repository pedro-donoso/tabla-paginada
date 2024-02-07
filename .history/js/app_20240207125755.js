import {traerData} from './api-fetch.js'

const info = await traerData();

console.log(info);

const cuerpoTabla = document.querySelector('#cuerpo-tabla');

