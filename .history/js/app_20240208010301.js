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

const cargarProductos = () => {
  cuerpoTabla.innerHTML = "";
  arreglo.map((producto) => {
    const filaTabla = document.createElement("tr");
    filaTabla.setAttribute("key", producto.id);

    const imagen = document.create

    const celda = `
    <th scope="row">${producto.id}</th>
    <td>${producto.title}</td>
    `;
    filaTabla.innerHTML = celda;
    cuerpoTabla.append(filaTabla);
  });
  cargarItemPaginacion();
};

const cargarItemPaginacion = () => {
  document.querySelector("#items").innerHTML = "";

  for (let index = 0; index < paginas; index++) {
    const item = document.createElement("li");
    item.classList = `page-item ${paginaActiva==index+1 ?"active":'' }`;
    const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</button>`;
    item.innerHTML = enlace;
    document.querySelector("#items").append(item);
  }
};

const modificarProductos =()=>{
    arreglo = info.slice(desde, limite * paginaActiva);
    cargarProductos();
}

window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina;

  if (desde <= info.length) {
    modificarProductos()
  }
};

window.siguientePagina = () => {
  if (paginaActiva < paginas) {
    desde += 5;
    paginaActiva++;
    modificarProductos();
  }
};

window.anteriorPagina = () => {
  if (desde > 0) {
    desde -= 5;
    paginaActiva--;
    modificarProductos();
  }
};

cargarProductos();
