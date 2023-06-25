const formularioDestino = document.getElementById("fomularioDestino");
const busquedaViaje = document.getElementById("busquedaViaje");
const select =  document.getElementById("destinoFiltrado");

const guardadoPaquetesViajesLs = () =>{
    localStorage.setItem("viajes",JSON.stringify(viajes));
}

guardadoPaquetesViajesLs();

const paqueteViajeLs = () =>{
    return JSON.parse(localStorage.getItem("viajes"));
}

const paqueteViajes = paqueteViajeLs();

const renderProductosOfertas = (filtrado) =>{
    
    const ofertas = filtrado.filter(item => item.categoria === "oferta");
    let salida = ""; 
    ofertas.forEach(item => {
    salida+=
    `<div class= "mb-3 d-flex justify-content-center">
        <div class="card bg-card css-card border-dark" style="width: 18rem;">
            <img src="${item.imagen}" class=" alt="${item.destino}">
            <div class="card-body ">
            <h5 class="card-title text-center"><p>${item.nombre}</p></h5>
            <p class="card-text text-center">Tu paquete de viaje soñado, ${item.nombre} 2023.\n Es posbile con DEFILIPPI TOURLINES.</p>
            </div>
            <div class="w-100 d-flex justify-content-center">
                <button type="submit" class="btn bg-btn">MÁS INFO</button>
            </div>
        </div>
    </div>`
   });
   document.getElementById("productos").innerHTML = salida;
}

renderProductosOfertas(paqueteViajes);

const filtradoPorZona = (valorInPut) => {
    let salida = "";
    const filtradoZona = paqueteViajes.filter((zonaViajes) => zonaViajes.zona == valorInPut.toLowerCase());
    filtradoZona.forEach((zonaViajes) => {
        salida += `<option value="${zonaViajes.destino}">${zonaViajes.destino}</option>\n`;
    });
    select.innerHTML = salida;
}

busquedaViaje.addEventListener("change", () => {
    let busquedaInput = busquedaViaje.value;
    filtradoPorZona(busquedaInput);
});

const validarFormulario = () =>{

    const errorEmail = document.getElementById("errorEmail");
    if((busquedaViaje.value === "") ){
        errorEmail.innerHTML = "Error! complete el campo (zona) antes de avanzar en la busqueda.";
        errorEmail.className = "text-danger bg-dark mt-1";
        return false;
    }else if((busquedaViaje.value.toLowerCase() !=="norte") && (busquedaViaje.value.toLowerCase() !=="centro") && (busquedaViaje.value.toLowerCase() !== "sur")){
        errorEmail.innerHTML = "Error! ingrese (norte, centro o sur), para avanzar con la busqueda.";
        errorEmail.className = "text-danger bg-dark mt-1";
        return false;
    }else{
        errorEmail.innerHTML = "";
        return true;
    }
}

const busquedaSelect = (valor) =>{
    let inputZona = paqueteViajes.filter(zonaViajes => zonaViajes.zona == busquedaViaje.value.toLowerCase());
    const selectOptions = inputZona.find(opciones => opciones.destino == valor.value);
    return selectOptions;
}

formularioDestino.addEventListener("submit",(e) =>{

    e.preventDefault();
    let validacionFormulario =  validarFormulario();
    if(validacionFormulario == true){      

        let opcionesLugares = busquedaSelect(select);
        localStorage.setItem("paqueteViajeBusqueda", JSON.stringify(opcionesLugares));
        setTimeout(() => location.href = "pages/paqueteViaje.html", 1500);
    }else{
        return false;
    }
});
