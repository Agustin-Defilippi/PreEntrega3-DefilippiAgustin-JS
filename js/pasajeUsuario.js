const destinoPasajero = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));
const datosPasajero = JSON.parse(localStorage.getItem("datosUsuario"));



const renderPasaje = () =>{
    const destino = destinoPasajero;
    const datosPersonales = datosPasajero;

    let boleto = 

    
    `
    <div class = "bg-boleto">
        
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
                    <li class="nombre-pasajero my-1">Nombre: ${datosPersonales.nombrePasajero}.</li>
                    <li class="apellido-pasajero my-1">Apellido: ${datosPersonales.apellidoPasajero}.</li>
                    <li class="dni-pasajero my-1">Edad: ${datosPersonales.edad}.</li>
                    <li class="dni-pasajero my-1">Dni: ${datosPersonales .dni}.</li>
                    <li class="dni-pasajero my-1">Correo electrónico: ${datosPersonales.correoElectronico}.</li>
                    <li class="dni-pasajero my-1">Provincia: ${datosPersonales .provincia}.</li>
                    <li class="dni-pasajero my-1">Ciudad: ${datosPersonales.ciudad}.</li>
                    <li class="dni-pasajero my-1">Nacionalidad: ${datosPersonales.nacionalidad}.</li>
                </ul>
            </div>

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
    </div>`    
   
  document.getElementById("pasaporte").innerHTML = boleto;
}

renderPasaje();