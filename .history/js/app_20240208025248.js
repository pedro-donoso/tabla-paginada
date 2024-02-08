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

const cargarItemPaginacion = () => {
  document.querySelector("#items").innerHTML = "";

  for (let index = 0; index < paginas; index++) {
    const item = document.createElement("li");
    item.classList = `page-item ${paginaActiva == index + 1 ? "active" : ""}`;
    const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</button>`;
    item.innerHTML = enlace;
    document.querySelector("#items").append(item);
  }
};

const modificarProductos = () => {
  arreglo = info.slice(desde, limite * paginaActiva);
  cargarProductos();
};

window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina;

  if (desde <= info.length) {
    modificarProductos();
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

SECCION PRODUCTOS
const cargarProductos = () => {
  cuerpoTabla.innerHTML = "";
  arreglo.map((producto) => {
    const filaTabla = document.createElement("tr");
    filaTabla.setAttribute("key", producto.id);

    // Creamos un elemento <img> para mostrar la imagen del producto
    const imagen = document.createElement("img");
    imagen.src = producto.image; // La URL de la imagen se proporciona en la respuesta de la API
    imagen.alt = producto.title; // Establecemos el atributo alt para accesibilidad
    imagen.width = "100"; // Establecemos el ancho de la imagen

    // Creamos celdas de tabla con caracteristicas del producto
    const celdaId = `<th scope="row">${producto.id}</th>`;
    const celdaTitulo = `<td>${producto.title}</td>`;
    const celdaCategoria = `<td>${producto.category}</td>`;
    const celdaDescripcion = `<td>${producto.description}</td>`;
    const celdaPrecio = `<td>$${producto.price}</td>`;
    const celdaImagen = document.createElement("td");
    celdaImagen.appendChild(imagen); // Agregamos el elemento <img> a la celda

    // Agregamos todas las celdas de la tabla a la fila de la tabla
    filaTabla.innerHTML =
      celdaId + celdaTitulo + celdaCategoria + celdaDescripcion + celdaPrecio;
    filaTabla.appendChild(celdaImagen);

    // Agregamos la fila de la tabla al cuerpo de la tabla
    cuerpoTabla.appendChild(filaTabla);
  });
  cargarItemPaginacion();
};

cargarProductos();
