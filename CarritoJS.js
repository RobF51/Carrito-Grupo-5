// Declaramos las variables que utilizaremos a lo largo del programa.
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

var producto1;
var producto2;
var producto3;
var precio1;
var precio2;
var precio3;

//Esta función nos informa del contenido del carrito y su precio total, plasmándolo 
//en las etiquetas fichaProucto1 y fichaProducto2.

function rellenarCarrito(){
	suma=parseFloat(precio1)+parseFloat(precio2)+parseFloat(precio3);  
    
	fichaProducto1.textContent="Productos: " + producto1 +", "+ producto2 +", " +producto3 ;
	fichaProducto2.textContent="Precio total: " +suma +" Euros";
}


//Esta función inicializa las variables

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

	producto1=document.formulario.producto1.value;
	producto2=document.formulario.producto2.value;
	producto3=document.formulario.producto3.value;
	precio1=document.formulario.precio1.value;
	precio2=document.formulario.precio2.value;
	precio3=document.formulario.precio3.value;


	capaTarjeta.style.display="none";
	capaEfectivo.style.display="none";

}

//Esta función mete los productos dentro del carrito.

function generarCarrito(){
	inicializar();
	var error=0;

	if (producto1.length==0 || producto2.length==0 || producto3.length==0 || precio1.length==0 || precio2.length==0 || precio3.length==0){
      errorProductos.textContent="Debe rellenar todos los campos";error++
	}

	if(error==0) rellenarCarrito();
}

//Esta función genera una ventana que nos informa de la cesta de la compra
//solo en caso de haber seleccionado una forma de pago.

function generarVentana(){
	rellenarCarrito;
	if(formaPago.value=="tarjeta" || formaPago.value=="efectivo" ){
   alert("Productos: " + producto1 +", "+ producto2 +", " +producto3 + ". Precio total: " +suma +" Euros");
    }else{
    	alert("Seleccione forma de pago");
    }

}

//Esta función pone a la escucha el menú "Forma de pago"

function setManejadorEventos(){
	formaPago.addEventListener("change",cargarPago);
}

window.onload=function(){
	inicializar();
    setManejadorEventos();
    document.formulario.boton.addEventListener("click", generarCarrito);
    document.formulario.boton2.addEventListener("click", generarVentana);
 
}

//Esta función despliega las diferentes opciones del menú "forma de pago"

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








