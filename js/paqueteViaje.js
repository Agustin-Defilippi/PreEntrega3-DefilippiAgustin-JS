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
                <b>Precio<b>: $${viajeFiltrado.precio}
                </p>
                </div>
            </div>
      </div>`;
    
   
      
       
        
    
    
    document.getElementById("paqueteViajeFiltrado").innerHTML=cardViajeFiltrado

}

viajeFiltrado();