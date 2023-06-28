const PaqueteExcursion =  recuperarTiendaExcursionesLS();
const excursiones = document.getElementById("excursiones");

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
            }
            })
       })

    });
}

renderTiendaExcursiones();


































/* const mensaje = () =>{
    const excursioneslala = PaqueteExcursion;
    let salida = "";

    excursioneslala.forEach(item => {
        



        Swal.fire({
            title: `excursion ${item.nombre}`,
            icon: 'info',
            html:
              `${item.destino}`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down'
          })


    });


    
} */

/* const mostrarProductos = () => {
	const contenedor = document.getElementById("contenedor");
	productos.forEach((producto) => {
		contenedor.innerHTML += `
        <button id="${producto.id}">Enviar</button>  
    `;
	});
	productos.forEach((producto) => {
		const boton = getElementById(producto.id);
		boton.addEventListener("click", () => {
			console.log("Evento");
		});
	});
};

const boton = document.getElementById("informacion");

boton.addEventListener("click",(e) =>{
    e.preventDefault();
    mensaje();
    console.log(boton);
}) */