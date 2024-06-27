const lista = document.querySelector("[data-lista]");

lista.addEventListener('click', async (evento) => {
    if (evento.target.closest('.boton-borrar')) {
        const producto = evento.target.closest('.producto__contenedor');
        const productoId = producto.dataset.id;

        if (productoId) {
            try {
                const response = await fetch(`http://localhost:3001/products/${productoId}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    producto.remove();
                    console.log("Producto eliminado");
                } else {
                    console.error("Error al eliminar el producto");
                }
            } catch (error) {
                console.error("Error de conexión", error);
            }
        }
    }
});
