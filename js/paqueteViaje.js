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
    let containerClima = document.getElementById("infoClima");
    const  infoDestino = viajeBusqueda;
    let informacion = infoConocerMas(infoDestino);
    containerInfoAdicional.innerHTML = informacion;
    containerClima.innerHTML = infoClima();
});

informacionAdicional.addEventListener("click", (e) => {
    JSON.parse(localStorage.getItem("paqueteViajeBusqueda")) || [];
    (e.target.id === "btn-contratar") && setTimeout(() => location.href = "contratarViaje.html", 1500);
});


const obtenerDatosApi = (ciudad,codigoPais) =>{
    let apiKey = "eda6c39ba9765814f39e9badb0dc9aed";
    const api =`"https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${codigoPais}&appid=${apiKey}"`;

    return api;
}

console.log(obtenerDatosApi("salta","ar"));

const datosApi = obtenerDatosApi("cordoba","ar");

console.log(datosApi);

const infoClima = () =>{
    return `
            <div class="climaCiudad">
                <div class="card card-clima w-50" style="width: 18rem;">
                    <img src="../img/chaltten.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`
}


/* const datosApiClima = "";

const obtenerDatosClima = async () =>{


    try {
        const respuesta = await fetch("https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}");
        const datosRespuesta = await respuesta.json();
        const datosApiClima = datosApiClima;
           
    } catch (error) {
        
    }
    
    
   
}

obtenerDatosClima(); */