async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/products", {
        method:"GET", 
        headers:{
            "Content-type":"application/json"
        }
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function crearProducto(imagen, nombre, precio){
    const conexion = await fetch("http://localhost:3001/products",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            photo:imagen,
            name:nombre,
            price:precio
        })
    })
    if(!conexion.ok){
        throw new Error("No fue posible crear el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


export const main = {
    listaProductos, crearProducto
}
