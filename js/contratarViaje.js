const destinoFinal = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

console.log(destinoFinal);

const comprarViaje= document.getElementById("comprarViaje");
comprarViaje.innerHTML=`Complete el formulario para contratar  <b>${destinoFinal.nombre}</b> a su paquete de viajes y así poder generar el pago del mismo.`





class PasajeCliente {
  constructor(nombre, apellido, edad, dni, correo, provincia, localidad, nacionalidad) {
    this.nombrePasajero = nombre;
    this.apellidoPasajero = apellido;
    this.edad = edad;
    this.dni = dni;
    this.correoElectronico = correo;
    this.provincia = provincia;
    this.localidad = localidad;
    this.nacionalidad = nacionalidad;
  }

  mayorEdad(numero) {
    if (this.dni < numero) {
      alert(`Usted es mayor de edad. \n Deberá presentar fotocopia a color de su DNI número ${this.dni} de ambos lados y su identificación física en la agencia.`);
    } else if (this.dni > numero) {
      alert("Usted es menor de edad, deberá presentar autorización de padre, madre y/o tutor y presentarse en la agencia de turismo.");
    } else {
      alert("Ingresó un número de DNI incorrecto.");
    }
  }

  nacionalidadPasajero() {
    if (this.nacionalidad === "argentino") {
      alert("Usted es argentino. Ingrese a MI ARGENTINA y descargue el certificado de vacunación contra COVID-19.");
    } else if (this.nacionalidad !== "argentino") {
      alert("Usted es extranjero. Por lo tanto, deberá presentar carnet de vacunación contra COVID-19, y será excluyente haber aplicado tres dosis correspondientes.");
    } else {
      alert("Ingresó un dato incorrecto.");
    }
  }
}

/* const usuario = new PasajeCliente(nombreUsuario, apellidoUsuario, edadUsuario, dniUsuario, correoUsuario, provinciaUsuario, ciudadUsuario, nacionalidadUsuario); */


const formulario = document.getElementById("formularioUsuario");

formulario.addEventListener("submit",(e)=>{
  
  e.preventDefault();

  const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
  const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
  const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
  const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
  const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
  const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
  const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
  const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();
  let completarCampos = document.getElementById("completarCampos");
  
  if((nombreUsuario == "")||(apellidoUsuario == "") || (edadUsuario == "") || (edadUsuario == "") || (dniUsuario == "") || (correoUsuario == "") || (provinciaUsuario == "") || (ciudadUsuario == "") || (nacionalidadUsuario == "")){
    completarCampos.innerHTML = "Error! complete todos los campos del formulario, para finalizar la compra.";
    completarCampos.className = "text-danger mt-1";

  }
 
})