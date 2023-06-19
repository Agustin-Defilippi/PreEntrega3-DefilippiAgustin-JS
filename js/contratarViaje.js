const destinoFinal = JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));

console.log(destinoFinal);

const comprarViaje= document.getElementById("comprarViaje");
comprarViaje.innerHTML=`Complete el formulario para contratar  <b>${destinoFinal.nombre}</b> a su paquete de viajes y así poder generar el pago del mismo.`






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
        if(this.dni<numero){
            alert(`Usted es mayor de edad. \n Debera presentar fotocopia a color de su DNI numero ${this.dni} de ambos lados y su identificacion en forma de física en la agencia.`);
            
        }else if(this.dni>numero){
            alert("Usted es menor de edad,deberá presentar autorizacion de padre, madre y/o tutor, presentarse en la agencia de turismo");

        }else{
            alert("ingreso un numero de dni incorrecto.")
        }
    }

    nacionalidadPasajero(){
      if(this.nacionalidad === "argentino"){
        alert("Usted es argentino, ingrese a MI ARGENTINA y descargue el certificado de vacunacion contra COVID-19.");
      }else if(this.nacionalidad !== "argentino"){
        alert("Usted es extranjero, por lo tanto debera presentar carnet de vacunacion contra COVID-19, y sera excluyente el aplicado de tres dosis correspondientes.");
      }else{
        alert("ingreso un dato incorrecto.");
      }
    }
}

const nombreUsuario = document.getElementById("nombreUsuario").value.toUpperCase();
const apellidoUsuario = document.getElementById("apellidoUsuario").value.toUpperCase();
const edadUsuario = document.getElementById("edadUsuario").value.toUpperCase();
const dniUsuario = document.getElementById("dniUsuario").value.toUpperCase();
const correoUsuario = document.getElementById("correoElectronico").value.toUpperCase();
const provinciaUsuario = document.getElementById("provinciaUsuario").value.toUpperCase();
const ciudadUsuario = document.getElementById("ciudadUsuario").value.toUpperCase();
const nacionalidadUsuario = document.getElementById("nacionalidadUsuario").value.toUpperCase();






const usuario = new PasajeCliente(nombreUsuario,apellidoUsuario,edadUsuario,dniUsuario,correoUsuario,provinciaUsuario,nacionalidadUsuario)

console.log(usuario);





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

  if((nombreUsuario == "") || (apellidoUsuario == "") || (edadUsuario == "") || (dniUsuario == "") || (correoUsuario == "") || (provinciaUsuario == "") || (ciudadUsuario == "") || (nacionalidadUsuario == "")){

    completarCampos.innerHTML= "Error, por favor complete todos los campos de ingreso, para avanzar.";
    completarCampos.className= "text-danger mb-1"
    return false;
  }else{
    completarCampos.innerHTML = "";
    return true;
  }


}



const fomularioIngresoUsuario = document.getElementById("fomularioUsuario")


fomularioIngresoUsuario.addEventListener("submit",(e) =>{
  e.preventDefault();
 
  const usuarios = usuario;
  
  if(formularioUsuario() == true){
    const pasaporteDestino =JSON.parse(localStorage.getItem("paqueteViajeBusqueda"));
    localStorage.setItem("datosUsuario",JSON.stringify(usuarios));
    setTimeout(() => location.href = "pasajeUsuario.html", 1500);
  }

})

