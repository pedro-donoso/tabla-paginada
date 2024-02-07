import { traerData } from "./api-fetch.js";

const info = await traerData();

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

// Variables para la paginación
let limite = 5;
let desde = 0;
let paginas = info.length / limite;
let paginaActiva = 1;

let arreglo = info.slice(desde, limite);

const cargarProductos = () => {
  cuerpoTabla.innerHTML = "";
  arreglo.map((producto) => {
    const filaTabla = document.createElement("tr");
    filaTabla.setAttribute("key", producto.id);
    const celda = `
    <th scope="row">${producto.id}</th>
    <td>${producto.title}</td>
    `
    filaTabla.innerHTML=celda
    cuerpoTabla.append(filaTabla)
  });
  

const cargarItemPaginacion = ()=>{
    document.querySelector('#items').innerHTML=''

    for (let index = 0; index < paginas; index++){
        const item = document.createElement('li')
        item.classList=`page-item`
        const enlace=`<button class="page-link" onclick="">${index+1}</button>`;
        item.innerHTML = enlace;
        document.querySelector('#items').append(item);
    }
};

cargarProductos();