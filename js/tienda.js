const datosRespuesta ="";

const obtenerDatosExcursiones = () =>{
   
    fetch("../js/datosTienda.json")
    .then(respuesta => respuesta.json())
    .then(datosRespuesta => 
        renderTiendaExcursiones(datosRespuesta),
        console.log(datosRespuesta)
    )
   
}

obtenerDatosExcursiones();



let carrito = JSON.parse(localStorage.getItem("prodCarrito")) || [];

const agregarProducto = (array,elemento) =>{
   array.push(elemento);
   return array;
}
const agregarProductoLS = (nombre,elemento) =>{
    localStorage.setItem(nombre,JSON.stringify(elemento));
}





const prodAgregados = document.getElementById("carritoProducto");

prodAgregados.addEventListener("click", () =>{
    location.href = "carrito.html";
})
