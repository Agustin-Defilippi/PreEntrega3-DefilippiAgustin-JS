const viajeBusqueda =  JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];

const viajeFiltrado = () =>{
    const viajeFiltrado = viajeBusqueda;

    let cardViajeFiltrado =
    `<div class="d-flex justify-content-center align-items-center my-5 bg-paqueteFiltrado">
            <div class="card  css-pFiltrado text-ligth border-dark " style="width: 18rem;">
                <img src="${viajeFiltrado.imagen}" class="card-img-top" alt="${viajeFiltrado.destino}">
                <div class="card-body">
                    <h4>${viajeFiltrado.nombre} 2023 te está esperando!<br></h4>
                    <p class="card-text">
                    Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                    <b>Precio</b>: $${viajeFiltrado.precio}
                    </p>
                </div>
                <div class= "d-flex justify-content-center mb-2">
                <button id="btn-conoceMas" class="btn bg-btn border-dark  text-light">Más Información</button>
                </div>
            </div>
      </div>`;
    
    document.getElementById("paqueteViajeFiltrado").innerHTML=cardViajeFiltrado;
}

viajeFiltrado();

const btnConoceMas = document.getElementById("btn-conoceMas");

btnConoceMas.addEventListener("click",() =>{
    let containerInfoAdicional = document.getElementById("informacionAdicional");
    const  infoDestino = viajeBusqueda;
    let informacion = infoConocerMas(infoDestino);
    containerInfoAdicional.innerHTML = informacion;
});

informacionAdicional.addEventListener("click", (e) => {
    JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];
    (e.target.id === "btn-contratar") && setTimeout(() => location.href = "contratarViaje.html", 1500);
});
