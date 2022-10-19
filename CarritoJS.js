//preguntar: esto no deberia ser con diccionario de datos? 
//asi se almacena un "perfil" por cada producto y solo habria que
//operar con nombre y precio a traves de bucles for


var nombreArt;
var precioArt;
var udsArt;
var anadirArt;
var totalArt;
var totalPrec;
var formaPago;
var titular;
var numTarjeta;
var cvv;
var importe;
var nombreError;
var precioError;
var articulo;
var precio;

var sumaArticulos;
var botonSumaArticulos;

//inicializa todo

function inicializar(){
	nombreArt=document.formulario.nombreArt;
	precioArt=document.formulario.precioArt;
	udsArt=document.formulario.udsArt;
	anadirArt=document.formulario.anadirArt;
	totalArt=document.formulario.totalArt;
	totalPrec=document.formulario.totalPrec;
	formaPago=document.formulario.formaPago;
	titular=document.formulario.titular;
	numTarjeta=document.formulario.numTarjeta;
	cvv=document.formulario.cvv;
	importe=document.formulario.importe;
	articulo=document.formulario.articulo;
	nombreError=document.getElementById.nombreError;
	precioError=document.getElementById.precioError;

	//preguntar si esto se inicializa desde principio
	sumaArticulos=document.formulario.sumaArticulos;

	capaTarjeta.style.display="none";
	capaEfectivo.style.display="none";

	//inicializacion del boton
	botonSumaArticulos = document.getElementsByName("añadirArt")
	botonSumaArticulos.addEventListener("click",rellenarCarrito)
}



function setManejadorEventos(){
	formaPago.addEventListener("change",cargarPago);
	anadirArt.addEventListener("click",generarCarrito);
}

window.onload=function(){
	inicializar();
    setManejadorEventos();
}




//esta funcion concatena los nombres de producto (concatena strings)
function rellenarCarrito(){
	alert("el boton de rellenar carrito funciona");
	
		sumaArticulos= sumaArticulos+ nombreArt;
		

		console.log(sumaArticulos);
	
}

//funcion escoger si se paga en efectivo o en tarjeta
function cargarPago(){
	if(formaPago.value=="seleccione"){
		capaTarjeta.style.display="none";
        capaEfectivo.style.display="none";
	}else if(formaPago.value=="tarjeta"){
		capaTarjeta.style.display="block";
		capaEfectivo.style.display="none";
	}else{
		capaTarjeta.style.display="none";
		capaEfectivo.style.display="block";
	}
}

//funcion para identificar si nombre, precio y cantidad son validos
function generarCarrito(){
	var error=0;

	if(nombreArt==""){
		nombreError.textContent="falta artículo";error++;
	}

	if(precioArt==""){
		precioError.textContent="falta precio";error++;
	}

	if(error==0) rellenarCarrito();
}



//boton de prueba (incidencia: la pagina refresca por cada accion que se hace (pulsar boton, etc))
function addFoo(){
	let ta = document.getElementById('content')
	ta.value += 'foo \n\n'
  }





