const PaqueteExcursion =  recuperarTiendaExcursionesLS();
const excursiones = document.getElementById("excursiones");

/* const agregarProductoCarrito = (id) =>{
    const carritoProducto = PaqueteExcursion;
    carritoProducto.find(producto => producto.id === id);
    console.log(carritoProducto);
}
 */


const renderTiendaExcursiones = () =>{
    const PaqueteExcursiones = PaqueteExcursion;
    
    PaqueteExcursiones.forEach(items => {
        const cardExcursiones = document.createElement("div");
        cardExcursiones.innerHTML=`<div class="d-flex excursionesTienda ">
                <div class="card  css-pFiltrado card-excursiones text-ligth" style="width: 18rem;">
                    <img src="${items.img}" class="card-img-top" alt="${items.destino}">
                    <div class="card-body text-center">
                        <h4 class="mb-2"><b>${items.nombre}</b><br></h4>
                        <p class="card-text">
                        Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                        <b>Precio</b>: <b>$${items.precio}</b>
                        </p>
                    </div>
                    <div class="w-100 d-flex justify-content-center">
                        <button id="${items.id}"type="submit" class="btn bg-btn">MÁS INFO</button>
                    </div>
                </div>
        </div>`;

        excursiones.appendChild(cardExcursiones); 
        const btnMasInfo = document.getElementById(`${items.id}`);
        console.log(btnMasInfo);
        btnMasInfo.addEventListener("click",() =>{
            Swal.fire({
            title: `${items.nombre}`,
            text: `(${items.destino})`,
            imageUrl: `${items.img}`,
            background:"black",
            color:"white",
            html:` ${items.destino}  <br><br> ${items.descripcion}`,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt:`${items.nombre}`,
            showCancelButton: true,
            confirmButtonText: 'Agregar (+)',
            denyButtonText:"Cancelar",
            cancelButtonText: `cancelar`,
            }).then((result) => {
            
            if (result.isConfirmed) {
                Swal.fire('Agregado al carrito!', '', 'success');
                /* agregarProductoCarrito(items.id) */
                const papa = localStorage.setItem("prod",JSON.parse(`${items.id}`));
                console.log(papa);
            }
            })
       })

    });
}

renderTiendaExcursiones();
