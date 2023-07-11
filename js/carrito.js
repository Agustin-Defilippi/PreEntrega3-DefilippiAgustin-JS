const productos = JSON.parse(localStorage.getItem("prodCarrito") || []);
const excursionesCarrito = document.getElementById("carrito");

const renderProdCarrito = () =>{
    const prodCarrito = productos;
    prodCarrito.forEach(productos => {
        const cardCarrito = document.createElement("div");
       
        cardCarrito.innerHTML = `
        <div class="accordion acordeon " id="accordionPanelsStayOpenExample">
            <div class="accordion-item text-center contenido-carrito">
                <div class="cont-h2-button">
                    <h2 class="accordion-header button-acordeon" id="panelsStayOpen-heading${productos.posicion}">
                    ${productos.nombre}
                    </h2>
                    <div class="container-button">
                        <button class="accordion-button" type="button"              data-bs-toggle="collapse"           data-bs-target="#panelsStayOpen-collapse${productos.posicion}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${productos.posicion}">
                           Excursiones
                        </button>
                    </div>
                </div>
                <div id="panelsStayOpen-collapse${productos.posicion}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${productos.posicion}">
                    <div class="accordion-body">
                        <strong> <div class="excursionesTienda ">
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
                    </div>
                </div>
                <div class="mb-3">
                    <button id="${productos.id}" class="btn btn-warning">Eliminar</button>
                </div>
            </div>
        </div>`;
        excursionesCarrito.appendChild(cardCarrito);

        const btnEliminar = document.getElementById(`${productos.id}`);

        btnEliminar.addEventListener("click", () =>{
            eliminarProducto(productos.id);
        })
    });
}

renderProdCarrito();
enlistarProductos();
contadorSubTotal();

const btnPagar = document.getElementById("btnPagoExcursion");

btnPagar.addEventListener("click",() =>{
    const selecTienda = document.getElementById("pagosTienda");
    if(selecTienda.value !=="" && selecTienda.value !=="-"){
       dispararSweetAlert()
    }
})

const btnVaciar = document.getElementById("vaciarCarro");

const selecTienda = document.getElementById("pagosTienda");

btnVaciar.addEventListener("click",() =>{
    vaciarCarrito()
})



selecTienda.addEventListener("input",() =>{
    let subTotalPagos = document.getElementById("pagos");
    subTotalPagos.innerHTML=`<p class="totalPago">Total: $${pagarExcursiones(selecTienda.value,calcularTotal()).toFixed(2)}</p>`
})



