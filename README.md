### https://tabla-paginada.netlify.app/

![ropa](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/20c4c8dc-ed82-406f-acc8-683f2a7921a6)

### 1. Creo archivo index.html con template html de Bootstrap

### 2. Creo estructura de Tabla y Paginación, boton onclic para cambiar de páginas:

![cuatro](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/e5995799-553b-4f17-b673-327939afd8a7)

### 3. Creo carpeta js con archivos:

1. js
 - api-fetch.js
 - app.js 

### 4. Agrego script como tipo MODULO al index.html:

```
<script type="module" src="./js/app.js"></script>
```
### 5. En el archivo api-fetch.js llamo a la url fake de productos e importo la data:

![tres](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/a1441380-9e4e-45b0-a61d-845dba341a16)


### 6. En el archivo app.js recibo la data, la reviso por consola:

![dos](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/baa0d64a-9997-4d43-9c1f-6c1e0efb6bd8)



![data](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/87450758-4461-4f62-b8b3-3a9290315436)

### 7. Traigo elemento cuerpo de la tabla desde index.html mediante su ID:
```
const cuerpoTabla = document.querySelector("#cuerpo-tabla");
```

### 8. Creo las variables de paginación:
![Captura desde 2024-02-08 15-35-47](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/33fbd563-4f19-459b-b8d7-2eade7bbd99b)


### 9. Creo constante cargarProductos:
![Captura de pantalla de 2024-02-09 12-09-23](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/b3b26579-d177-48ec-b6d8-4b7643574d75)

### 10. Creo constante cargarItemPaginacion con condicional ternario para marcar página activa:
![item](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/d7aed9e4-0450-45b0-9bc1-efa95247607d)

### 11. Creo constante modificarProductos y opciones de Paginación:

![paginas](https://github.com/pedro-donoso/tabla-paginada/assets/68760595/17ab4d19-af6f-461d-83bd-52a9c9bcaab0)

