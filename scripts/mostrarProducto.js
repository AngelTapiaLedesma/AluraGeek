import { main } from "./main.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(id, imagen, nombre, precio) {
    const producto = document.createElement("li");
    producto.className = "producto__contenedor";
    producto.dataset.id = id;

    producto.innerHTML = `
        <div class="producto__imagen">
            <img id="imagen-producto" src="${imagen}" alt="imagen del producto">
        </div>
        <div class="producto__nombre">
            <h2>${nombre}</h2>
        </div>
        <div class="producto__descripcion">
            <p>$${precio}</p>
            <button class="boton-borrar" data-borrar>
                <img id="borrar" src="images/delete.png" alt="placeholder">
            </button>
        </div>
    `;
    return producto;
}

async function listaProductos() {

    try {
        const listaAPI = await main.listaProductos();
        listaAPI.forEach(element => lista.appendChild(construyeCard(element.id, element.photo, element.name, element.price)));
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
    const items = document.querySelectorAll(".producto__contenedor");
    const zonaElementos = document.querySelector(".zona-productos");

    // Muestra la seccion si hay productos
    
    if(items.length <= 0){
        zonaElementos.style.display="none";
    }
    else{
        zonaElementos.style.display="";     
    }
}

listaProductos();
export { listaProductos };
