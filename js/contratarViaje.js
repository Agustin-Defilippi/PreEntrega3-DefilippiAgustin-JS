const destinoFinal = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

console.log(destinoFinal);
const h1 = document.getElementById("defilippi-destino");
h1.innerHTML=`Defilippi Tourlines Y <b>${destinoFinal.nombre.toUpperCase()}</b> te están esperando!`;

const comprarViaje= document.getElementById("comprarViaje");
comprarViaje.innerHTML=`Complete el formulario para contratar  <b>${destinoFinal.nombre}</b> a su paquete de viajes y así poder generar el pago del mismo.`;

class PasajeCliente{
    constructor(nombre,apellido,edad,dni,correo,provincia,ciudad,nacionalidad){
        this.nombrePasajero = nombre;
        this.apellidoPasajero = apellido;
        this.edad = edad
        this.dni = dni;
        this.correoElectronico = correo;
        this.provincia = provincia;
        this.localidad = ciudad;
        this.ciudad = ciudad;
        this.nacionalidad = nacionalidad;
    }
      mayorEdad(numero){
        if (this.edad < numero) {
          return "Usted es menor de edad. Deberá presentar autorización de padre, madre y/o tutor y presentarse en la agencia de turismo.";
        }else{
          return `Usted es mayor de edad. Deberá presentar fotocopia a color de su DNI número ${this.dni} de ambos lados y su identificación en forma física en la agencia.`;
        }
      } 
    nacionalidadPasajero(){
      if(this.nacionalidad === "ARGENTINO"){
        return"Usted es argentino, ingrese a MI ARGENTINA y descargue el certificado de vacunacion contra COVID-19.";
      }else if(this.nacionalidad !== "ARGENTINO"){
        return"Usted es extranjero, por lo tanto debera presentar carnet de vacunacion contra COVID-19, y sera excluyente el aplicado de tres dosis correspondientes.";
      }else{
        return"ingreso un dato incorrecto.";
      }
    }
}
const formularioUsuario = () =>{
  const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
  const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
  const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
  const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
  const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
  const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
  const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
  const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();

  let completarCampos = document.getElementById("completarCampos");
  if(((nombreUsuario == "") || (!isNaN(nombreUsuario))) || ((apellidoUsuario == "") || (!isNaN(apellidoUsuario))) || ((edadUsuario == "") ||(isNaN(edadUsuario))) || ((dniUsuario == "") ||(isNaN(dniUsuario))) || (correoUsuario == "") || ((provinciaUsuario == "")|| (!isNaN(provinciaUsuario))) || ((ciudadUsuario == "")|| (!isNaN(ciudadUsuario))) || ((nacionalidadUsuario == "")|| (!isNaN(nacionalidadUsuario)))){

    completarCampos.innerHTML= "Error, por favor complete todos los campos de ingreso y revise si los datos son correspondientes hacia cada campo. Para poder avanzar.";
    completarCampos.className= "text-danger bg-dark text-center mb-1";
    return false;
  }else{
    completarCampos.innerHTML = "";
    return true;
  }
}

const fomularioIngresoUsuario = document.getElementById("fomularioUsuario")
fomularioIngresoUsuario.addEventListener("submit",(e) =>{
  e.preventDefault();

  const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
  const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
  const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
  const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
  const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
  const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
  const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
  const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();

  const usuario = new PasajeCliente(nombreUsuario,apellidoUsuario,edadUsuario,dniUsuario,correoUsuario,provinciaUsuario,ciudadUsuario,nacionalidadUsuario)
  if (formularioUsuario() == true) {
    const menorEdad = document.getElementById("menorEdad");
    const nacionalidad = document.getElementById("nacionalidad");
    const edadMinima = 18;

    menorEdad.className="text-dark bg-warning";
    nacionalidad.className="text-dark bg-warning";

    if (usuario.edad < edadMinima) {
      return (menorEdad.innerHTML = "<b>Debes tener al menos 18 años para contratar el paquete de viaje</b>.");
    }
    menorEdad.innerHTML = usuario.mayorEdad(edadMinima);
    nacionalidad.innerHTML= usuario.nacionalidadPasajero();
    JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));
    localStorage.setItem("datosUsuario", JSON.stringify(usuario));
    setTimeout(() => (location.href = "pasajeUsuario.html"), 5000);
  }
});
