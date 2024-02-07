### 1. Creo archivo index.html con template html de Bootstrap

### 2. Creo estructura de Tabla y Paginación
```
<div class="container">
        <div class="row my-5">
            <div class="col text-center">
                <h1>Tabla de productos</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-8 offset-2">
                <div class="d-flex justify-content-end">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <button class="page-link">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <div class="items" class="d-flex"></div>
                            <li class="page-item">
                                <button class="page-link">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpo-tabla">
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
```
### 3. Creo carpeta js con archivos:

1. js
 - api-fetch.js
 - app.js 

### 4. Agrego script como tipo MODULO al index.html:

```
<script type="module" src="./js/app.js"></script>
```
### 5. En el archivo api-fetch.js llamo a la url fake de productos e importo la data:
```
const url = "https://fakestoreapi.com/products";

export const traerData = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
```
### 6. En el archivo app.js recibo la data:
```
import {traerData} from './api-fetch.js'

const info = await traerData();

console.log(info);
```


