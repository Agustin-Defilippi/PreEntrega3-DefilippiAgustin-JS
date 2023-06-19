const viajeFiltrado = () =>{
    const viajeFiltrado = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

    let cardViajeFiltrado =
    `<div class="d-flex justify-content-center mb-5">
            <div class="card bg-card css-card border-dark " style="width: 18rem;">
                <img src="${viajeFiltrado.imagen}" class="card-img-top" alt="${viajeFiltrado.destino}">
                <div class="card-body">
                    <h4>${viajeFiltrado.nombre} 2023 te está esperando!<br></h4>
                    <p class="card-text">
                    Con Defilippi Tourlines esto es posible, aprovecha con nosotros la posibilidad de poder hacer tu  sueño realidad.<br><br>
                    <b>Precio</b>: $${viajeFiltrado.precio}
                    </p>
                </div>
                <div class= "d-flex justify-content-center mb-2">
                <button id="btn-conoceMas" class="btn bg-btn-render border-dark  text-light">Más Información</button>
                </div>
            </div>
      </div>`;
    
    document.getElementById("paqueteViajeFiltrado").innerHTML=cardViajeFiltrado
}

viajeFiltrado();

const btnConoceMas = document.getElementById("btn-conoceMas");
const InfoAdicional = document.getElementById("informacionAdicional");
btnConoceMas.addEventListener("click",() =>{
    let containerInfoAdicional = document.getElementById("informacionAdicional");
    const  infoDestino = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

    let informacion = `
        <div class="card mb-4 w-100 css-infoViaje " style="width: 18rem;">
            <img src="${infoDestino.imagen2}" class="w-100" alt="...">
               
            <div class="card-body">
                <h5 class="card-title text-center">${infoDestino.nombre}</h5>
                <p class="card-text text-center my-2">${infoDestino.slogan}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Fecha de salida</b>: ${infoDestino.salida}.</li>
                <li class="list-group-item"><b>Excursiones</b>: ${infoDestino.excursiones}.</li>
                <li class="list-group-item"><b>Coordinador</b>: ${infoDestino.coordinador}.</li>
            </ul>
            <div class="card-body d-flex justify-content-center">
                <button id="btn-contratar" type="button" class="btn btn-contratar">Contratar</button>
            </div>
        </div>
        
    `
    containerInfoAdicional.innerHTML = informacion;
});


informacionAdicional.addEventListener("click", (e) => {
    (e.target.id === "btn-contratar") && setTimeout(() => location.href = "contratarViaje.html", 1500);
});

