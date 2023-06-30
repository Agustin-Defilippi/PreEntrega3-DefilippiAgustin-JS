const productos = JSON.parse(localStorage.getItem("prodCarrito") || []);
const excursionesCarrito = document.getElementById("carrito");

const renderProdCarrito = () =>{
    const prodCarrito = productos;
    prodCarrito.forEach(productos => {
        const cardCarrito = document.createElement("div");
        cardCarrito.innerHTML = `<div class="d-flex justify-content-center excursionesTienda ">
            <div class="card  css-pFiltrado card-excursiones text-ligth" style="width: 18rem;">
                <img src="${productos.img}" class="card-img-top" alt="${productos.destino}">
                <div class="card-body text-center">
                    <h4 class="mb-2"><b>${productos.nombre}</b><br></h4>
                    <p class="card-text">
                    Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                    <b>Precio</b>: <b>$${productos.precio}</b>
                    </p>
                </div>
            </div>
        </div>`;

        excursionesCarrito.appendChild(cardCarrito);
    });
}

renderProdCarrito();