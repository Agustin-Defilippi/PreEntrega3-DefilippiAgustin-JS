const viajes = [{nombre:"Salta",destino:"salta",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Andina Hotel",precio:82500,categoria:"oferta",zona:"norte",imagen:"https://i.ytimg.com/vi/wxCNnAuvO8I/maxresdefault.jpg"}
,{nombre:"Formosa",destino:"formosa",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Solar del lago cabañas",precio:68900,categoria:"oferta",zona:"norte",imagen:"https://agenfor.com.ar/wp-content/uploads/2019/12/Portada-1.png"}
,{destino:"misiones",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"El salto del tigre",precio:112700,categoria:"alta",zona:"norte"},
{nombre:"San luis",destino:"san luis",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"La chaqueñita cabañas",precio:52000,categoria:"oferta",zona:"centro",imagen:"https://upload.wikimedia.org/wikipedia/commons/4/42/Atardecer_con_el_Cerro_Negro.JPG"},
{destino:"buenos aires",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"Hotel Monaco",precio:39500,categoria:"baja",zona:"centro"},
{destino:"san juan",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"Temu Hoteles",precio:131700,categoria:"alta",zona:"centro"},
{destino:"santa cruz",duracion:"4 dias",boleto:"ida y vuelta",hospedaje:"Cabañas el Arriero",precio:100000,categoria:"alta",zona:"sur"},
{nombre:"Calafate",destino:"calafate",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Suites la Ferrere",precio:185300,categoria:"oferta",zona:"sur",imagen:"https://i.ytimg.com/vi/54DgAZHTAEI/maxresdefault.jpg"}];




const renderProductosOfertas = () =>{
    const viajesOfertas = viajes.filter(item => item.categoria === "oferta");

   let salida = ""; 

   viajesOfertas.forEach(item => {
    salida+=`<div class= "mb-3 d-flex justify-content-center">

    <div class="card bg-card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body ">
        <h5 class="card-title"><p>${item.destino}</p></h5>
        <p class="card-text text-center">Tu paquete de viaje soñado, ${item.nombre} 2023.\n Es posbile con DEFILIPPI TOURLINES.</p>
        <div class= "d-flex justify-content-center">
        <a href="#" class="btn bg-btn-render text-light">Conoce más</a>
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
    const filtradoZona = viajes.filter((zonaViajes) => zonaViajes.zona == busquedaInput.toLowerCase());
    filtradoZona.forEach((zonaViajes) => {
        salida += `<option value="${zonaViajes.destino}">${zonaViajes.destino}</option>\n`;
    });
    select.innerHTML = salida;
}

busquedaViaje.addEventListener("change", () => {
    filtrado();
});

formularioDestino.addEventListener("submit",(e) =>{

    e.preventDefault();

    const errorEmail = document.getElementById("errorEmail");
    if((busquedaViaje.value === "") || ((busquedaViaje.value.toLowerCase() !== "norte") && (busquedaViaje.value.toLowerCase() !== "centro") && (busquedaViaje.value.toLowerCase() !== "sur"))){
        errorEmail.innerHTML = "Error!, Complete el campo zona, antes de avanzar con la búsqueda.";
        errorEmail.className = "text-danger";
        
    }else{
        errorEmail.innerHTML = "";
    }
    
    const destinoSeleccionado = {
        zona: busquedaViaje.value,
        destino: select.value
    }
    
    

   let destino= localStorage.setItem("paqueteViaje",JSON.stringify(destinoSeleccionado));

  /*  let destinooo = JSON.parse(localStorage.getItem("paqueteViaje"));

   console.log(destinooo);
 */
    
});



