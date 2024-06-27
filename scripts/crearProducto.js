import { main } from "./main.js";
import { listaProductos } from './mostrarProducto.js';

// Constantes
const formulario = document.querySelector("[data-formulario]");

//Eventos
formulario.addEventListener("submit", (evento) => crearProducto(evento));

//Funciones
async function crearProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await main.crearProducto(imagen,nombre,precio)
        alert('Se creo su producto')
        //window.location.href="../pages/envio-concluido.html"
    }catch(e){
        alert(e);
    }
    
}

