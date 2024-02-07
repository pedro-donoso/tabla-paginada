import { traerData } from "./api-fetch.js";

const info = await traerData();

console.log(info);

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Variables para la paginación
let limite = 5;
let desde = 0;
let paginas = info.length / limite;
let paginaActiva = 1;

let arreglo = info.slice(desde, limite);

console.log(arreglo);

const cargarProductos =()=>{
    cuerpoTabla.innerHTML = ''
    arreglo.map((producto)=>{
        const fila = document.createElement
    })
}