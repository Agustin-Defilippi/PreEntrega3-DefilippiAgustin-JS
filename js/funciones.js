//main.js
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

const filtradoPorZona = (arrayViajes,valorInPut) => {
    let salida = "";
    const filtradoZona = arrayViajes.filter((zonaViajes) => zonaViajes.zona == valorInPut.toLowerCase());
    filtradoZona.forEach((zonaViajes) => {
        salida += `<option value="${zonaViajes.destino}">${zonaViajes.destino}</option>\n`;
    });
    select.innerHTML = salida;
}

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

const busquedaSelect = (arrayViajes,valor) =>{
    let inputZona = arrayViajes.filter(zonaViajes => zonaViajes.zona == busquedaViaje.value.toLowerCase());
    const selectOptions = inputZona.find(opciones => opciones.destino == valor.value);
    return selectOptions;
}

//paqueteViaje.js
const infoConocerMas = (objeto) =>{
    return `<div class="card mb-4 w-100 css-infoViaje " style="width: 18rem;">
                <div class=" bord-card-info">
                    <img src="${objeto.imagen2}" class="w-100" alt="...">
                    <div class="card-body color-slogan">
                        <h5 class="card-title text-center">${objeto.nombre}</h5>
                        <p class="card-text text-center my-2">${objeto.slogan}</p>
                    </div>
                    <ul class="list-group list-group-flush css-infoViaje">
                        <li class="list-group-item css-infoViaje"><b>Fecha de salida</b>: ${objeto.salida}.</li>
                        <li class="list-group-item"><b>Excursiones</b>: ${objeto.excursiones}.</li>
                        <li class="list-group-item"><b>Coordinador</b>: ${objeto.coordinador}.</li>
                    </ul>
                    <div class="card-body d-flex justify-content-center">
                        <button id="btn-contratar" type="button" class="btn btn-contratar">Contratar</button>
                    </div>
                <div>    
            </div>`
}

//contratarViaje.js
const abonarViaje = (valor) =>{
    const viajePago = destinoFinal;

    if(valor === "debito"){
      return (viajePago.precio * 0.8);
    }else if(valor === "1 pago"){
      return (viajePago.precio * 0.9);
    }else if(valor === "3 pagos"){
      return viajePago.precio;
    }else if(valor === "6 pagos"){
      return (viajePago.precio * 1.10);
    }else if(valor === "12 pagos"){
      return (viajePago.precio * 1.20);
    }else{
      return "";
    }
}

const validarFormularioUsuario = () =>{
    const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
    const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
    const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
    const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
    const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
    const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
    const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
    const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();
    const tarjeta = document.getElementById("tarjeta").value;
    const formaDePago = document.getElementById("formaPago").value;
    let completarCampos = document.getElementById("completarCampos");

    if(
        ((nombreUsuario == "") || (!isNaN(nombreUsuario))) ||
        ((apellidoUsuario == "") || (!isNaN(apellidoUsuario))) ||
        ((edadUsuario == "") || (isNaN(edadUsuario))) || 
        ((dniUsuario == "") || (isNaN(dniUsuario)))  || 
        ((provinciaUsuario == "") || (!isNaN(provinciaUsuario))) || 
        ((ciudadUsuario == "") || (!isNaN(ciudadUsuario))) || 
        ((nacionalidadUsuario == "") || (!isNaN(nacionalidadUsuario))) || 
        ((tarjeta == "") || ((tarjeta.toString().length !== 16)) || (isNaN(tarjeta))) || (formaDePago === "Abone su viaje")|| (correoUsuario == ""))
    {
      completarCampos.innerHTML= "Error, por favor complete todos los campos de ingreso y revise si los datos son correspondientes hacia cada campo. Para poder avanzar.";
      completarCampos.className= "text-danger bg-dark text-center mb-1";
      return false;
    }else{
      completarCampos.innerHTML = "";
      return true;
    }
}

const generandoPasaje = (nombre) =>{
    Swal.fire({
      position: 'center',
      imageUrl: `../img/world.jpg`,
      imageWidth: 200,
      imageHeight: 200,
      title:"Defilippi Tourlines Company",
      text: 'Aguarde unos intantes, se esta generando el pasaje.',
      color:"black",
      showConfirmButton: false,
      
    });

    setTimeout(() =>{
      Swal.fire({
        position: 'center',
        icon: "success",
        imageWidth: 200,
        imageHeight: 200,
        title:"La compra se ha realizado con EXITO!",
        text: `Muchas gracias por elegirnos ${nombre}`,
        color:"black",
        showConfirmButton: false,
      })
    },8000);

    setTimeout(() => (location.href = "pasajeUsuario.html"), 10000);
}

const datosUsuario = () =>{
    const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
    const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
    const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
    const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
    const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
    const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
    const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
    const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();

    const usuario = new PasajeCliente(nombreUsuario,apellidoUsuario,edadUsuario,dniUsuario,correoUsuario,provinciaUsuario,ciudadUsuario,nacionalidadUsuario);
    
    return usuario;
}

const validarEdad = (usuario,edadMinima) =>{
    if (usuario.edadUsuario < edadMinima) {
        return (menorEdad.innerHTML = "<b>Debes tener al menos 18 años para contratar el paquete de viaje</b>.");
      }else if (usuario.edadUsuario > edadMinima){
        generandoPasaje(usuario.nombrePasajero);
    }
}

//pasajeUsuario.js
const renderPasajeUsuario = (datosUsuario,destino) =>{
   return  `<div class = "bg-boleto">
                <div class="borde-superior">
                    <h3>Defilippi Tourlines Company</h3>
                    <p class="text-p text-center">Pasaporte Oficial Ministerio de Turismo Argentino</p>
                    <img class="img-fluid "src="https://img.freepik.com/vector-premium/diseno-logotipo-viaje-avion-aire-plano_8035-9.jpg?w=2000" alt="">
                </div>
                <div class="borde-slogan mt-3">
                    <p>${destino.slogan}</p>
                </div>
                <div class="contenedorDatos">
                    <div class="datos-pasajeros" id="datos-pasajeros">
                        <ul>
                            <li class="nombre-pasajero my-1">Nombre: ${datosUsuario.nombrePasajero}.</li>
                            <li class="apellido-pasajero my-1">Apellido: ${datosUsuario.apellidoPasajero}.</li>
                            <li class="dni-pasajero my-1">Edad: ${datosUsuario.edadUsuario}.</li>
                            <li class="dni-pasajero my-1">Dni: ${datosUsuario .dni}.</li>
                            <li class="dni-pasajero my-1">Correo electrónico: ${datosUsuario.correoElectronico}.</li>
                            <li class="dni-pasajero my-1">Provincia: ${datosUsuario .provincia}.</li>
                            <li class="dni-pasajero my-1">Ciudad: ${datosUsuario.ciudad}.</li>
                            <li class="dni-pasajero my-1">Nacionalidad: ${datosUsuario.nacionalidad}.</li>
                        </ul>
                        <div class="destino">
                            <p class="css-white">Destino: ${destino.nombre}.</p>
                        </div>
                        <div class="duracion">
                            <p class="css-white">Duracion: ${destino.duracion}.</p>
                        </div>
                        <div class="tipo-boleto">
                            <p class="css-white">Tipo de viaje: ${destino.categoria}.</p>
                        </div>
                        <div class="hospedaje">
                            <p class="css-white">Hospedaje: ${destino.hospedaje}.</p>
                        </div>
                        <div class="salida">
                            <p class="css-white">Salida: ${destino.salida}.</p>
                        </div>
                    </div>
                </div>
            </div>`    
}