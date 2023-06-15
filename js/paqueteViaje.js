const viajeFiltrado = () =>{
    const viajeFiltrado = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

    let cardViajeFiltrado =
    `<div class ="d-flex justify-content-center ">
            <div class="card" style="width: 18rem;">
                <img src="${viajeFiltrado.imagen}" class="card-img-top" alt="${viajeFiltrado.destino}">
                <div class="card-body">
                <p class="card-text">${viajeFiltrado.nombre} te está esperando!</p>
                </div>
            </div>
      </div>`;
    
   
      
       
        
    
    
    document.getElementById("paqueteViajeFiltrado").innerHTML=cardViajeFiltrado

}

viajeFiltrado();