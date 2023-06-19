const guardadoPaquetesViajesLs = () =>{
    localStorage.setItem("viajes",JSON.stringify(viajes));
}

guardadoPaquetesViajesLs();

const paqueteViajeLs = () =>{
    return JSON.parse(localStorage.getItem("viajes"));
}

const paqueteViajes = paqueteViajeLs();

const renderProductosOfertas = () =>{
    
    const ofertas = paqueteViajes.filter(item => item.categoria === "oferta");
    let salida = ""; 
    ofertas.forEach(item => {
    salida+=
    `<div class= "mb-3 d-flex justify-content-center">
        <div class="card bg-card css-card border-dark" style="width: 18rem;">
            <img src="${item.imagen}" class=" alt="${item.destino}">
            <div class="card-body ">
            <h5 class="card-title text-center"><p>${item.nombre}</p></h5>
            <p class="card-text text-center">Tu paquete de viaje soñado, ${item.nombre} 2023.\n Es posbile con DEFILIPPI TOURLINES.</p>
            <div class= "d-flex justify-content-center">
            <a href="#" class="btn bg-btn-render border-dark text-light">Conoce más</a>
            </div>
            
            </div>
        </div>
    </div>`
   });
   document.getElementById("productos").innerHTML = salida;
}

renderProductosOfertas();

const formularioDestino = document.getElementById("fomularioDestino");
const busquedaViaje = document.getElementById("busquedaViaje");
const select =  document.getElementById("destinoFiltrado");

const filtrado = () => {
    let salida = "";
    let busquedaInput = busquedaViaje.value;
    const filtradoZona = paqueteViajes.filter((zonaViajes) => zonaViajes.zona == busquedaInput.toLowerCase());
    filtradoZona.forEach((zonaViajes) => {
        salida += `<option value="${zonaViajes.destino}">${zonaViajes.destino}</option>\n`;
    });
    select.innerHTML = salida;
}

busquedaViaje.addEventListener("change", () => {
    filtrado();
});

const errorCamposFormulario = () =>{

    const errorEmail = document.getElementById("errorEmail");
    if((busquedaViaje.value === "") ){
        errorEmail.innerHTML = "Error! complete el campo (zona) antes de avanzar en la busqueda."
        errorEmail.className = "text-danger mt-1";
        return false;
    }else if((busquedaViaje.value.toLowerCase() !=="norte") && (busquedaViaje.value.toLowerCase() !=="centro") && (busquedaViaje.value.toLowerCase() !== "sur")){
        errorEmail.innerHTML = "Error! ingrese (norte, centro o sur), para avanzar con la busqueda."
        errorEmail.className = "text-danger mt-1";
        return false;
    }else{
        errorEmail.innerHTML = "";
        return true;
    }
}

formularioDestino.addEventListener("submit",(e) =>{

    e.preventDefault();
    let seguirPrograma=  errorCamposFormulario();
    if(seguirPrograma == true){

        const formularioInput = paqueteViajes.filter(zonaViajes => zonaViajes.zona == busquedaViaje.value.toLowerCase());
        const fomularioSelect = formularioInput.find(destino => destino.destino == select.value);
        localStorage.setItem("paqueteViajeBusqueda", JSON.stringify(fomularioSelect));
        setTimeout(() => location.href = "pages/paqueteViaje.html", 1500);
    }else{
        return false
    }
});



