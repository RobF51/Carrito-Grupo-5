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

function rellenarCarrito(){

}

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

	capaTarjeta.style.display="none";
	capaEfectivo.style.display="none";
}

function setManejadorEventos(){
	formaPago.addEventListener("change",cargarPago);
	anadirArt.addEventListener("click",generarCarrito);
}

window.onload=function(){
	inicializar();
    setManejadorEventos();
}

