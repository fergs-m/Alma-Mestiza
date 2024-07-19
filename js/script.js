/*Estructura:
- Variables globales
- Función para los eventos
- Funciones que ejecutan los eventos*/ 

/*Variables para controlar aparición y desaparición lista adopción*/ 
let adopcion = document.getElementById('adopcion');
let animales = document.getElementById('ol');
let blockAdopcion = document.getElementsByClassName('header__extraAdopcion');

/*Variables para controlar aparición y desaparición lista ayudar*/ 
let ayudar = document.getElementById('ayudar');
let opcionesAyuda = document.getElementById('olLi');
let blockAyuda = document.getElementsByClassName('header__extraAyuda'); 

/*Header cortina responsive: Menus desplegables adopción y ayuda*/
let adopcionMovil = document.getElementById('adopcionCortina');
let ayudarMovil = document.getElementById('ayudarCortina');

/*Array carrusel y variables*/
let carruselImg = ['img/nueva-adopcion.webp', 'img/nueva-dona.webp', 'img/nueva-voluntario.webp'];

let lugar = 0;
let botonDerecha = document.getElementById('flechaDer');
let botonIzquierda = document.getElementById('flechaIzq');
let img = document.getElementById('banner');

/*Links para imagenes de carrusel*/
let arrayLinks = ['html/adopcion.html','html/dona.html', 'html/formulario.html'];
links = document.getElementById('linkCarrusel');

/*Variable para parar formulario*/
let form = document.getElementById('formu');


function manejaEventos () {

    /*Con esto aparecera y desaparece la lista de animales en adopción en nav*/
    adopcion.addEventListener('mouseenter', ApareceAnimales);
    animales.addEventListener('mouseleave',desapareceAnimales);

    /*Con esto aparecera y desaparece la lista ayudanos en nav*/
    ayudar.addEventListener('mouseenter', apareceAyuda);
    opcionesAyuda.addEventListener('mouseleave', desapareceAyuda);

    /*Con estos botones aparecera header cortina responsive*/
    let botonBarras = document.getElementById('barras');
    botonBarras.addEventListener('click', muestraCortina);

    let botonX = document.getElementById('cierra');
    botonX.addEventListener('click',desapareceCortina);

    /*Con esto despliego menu ayudar y adopción en responsive */
    adopcionMovil.addEventListener('click', apareceMenuAdopcion);
    ayudarMovil.addEventListener('click',apareceMenuAyudar);

    /*Con esto se mueven las imagenes en carrusel*/ 
    botonDerecha.addEventListener('click',siguenteImagen); 
    botonIzquierda.addEventListener('click', imagenAntes);
    
     /*Parar formulario*/
     form.addEventListener('submit', noEnviar);

}

//Funciones aparece y desaparece lista adopción 

function ApareceAnimales () { //for aplica el estilo al bloque que contiene los elementos

    for (let i = 0; i < blockAdopcion.length; i++) {
        
        blockAdopcion[i].style.maxHeight = '0';
        
    }

    blockAdopcion[0].style.maxHeight = '10rem';

}

function desapareceAnimales () {

    for (let i = 0; i < blockAdopcion.length; i++) {
        
        blockAdopcion[i].style.maxHeight = '0'; 
    }
 
}

//Funciones aparece y desaparece lista ayudar

function apareceAyuda (){

    
    for (let i = 0; i < blockAyuda.length; i++) {
        
        blockAyuda[i].style.maxHeight = '0';
    }

    blockAyuda[0].style.maxHeight = '10rem';

}

function desapareceAyuda () {

    for (let i = 0; i < blockAyuda.length; i++) {
        
        blockAyuda[i].style.maxHeight = '0'; 
    }

}

/*Aparece header cortina para responsive*/
function muestraCortina (){

    let cortina = document.getElementById('cortina');
    cortina.style.width = '50%';

        /*Le quita la clase desaparece para que no se mantenga en la página*/
    let dosListas = document.getElementById('listaResponsive'); //remueve la clase a las listas generales. 
    dosListas.classList.remove('desaparece');

    let botonDonarResponsive = document.getElementById('donaResponsive');//remueve clases a botón
    botonDonarResponsive.classList.remove('desaparece');
}

/*Con esto desaparece menu cortina*/
function desapareceCortina (){

    let cortina = document.getElementById('cortina');
    cortina.style.width = '0';

          /*Permite dar una transición a las listas para que al cerra header responsive, desaparezcan de forma suave */
    let dosListas = document.getElementById('listaResponsive'); //desaparecen las listas generales.
    dosListas.classList.add('desaparece');

    let botonDonarResponsive = document.getElementById('donaResponsive'); //desaparece botón donar por animación 
    botonDonarResponsive.classList.add('desaparece');
}

/*Con esto aparece y desaparece menu adopción en responsive */
function apareceMenuAdopcion (){

    let listaResponsiveAdopcion = document.getElementById('olCortina');
    listaResponsiveAdopcion.classList.toggle('altura'); //da y quita la clase altura

}

/*Con esto aparece y desaparece menu ayudar en responsive */
function apareceMenuAyudar(){
    let listaResponsiveAyudar = document.getElementById('olLiCortina');
    listaResponsiveAyudar.classList.toggle('altura'); //da y quita la clase altura 
}


/*Mueve carrusel de imagenes hacia adelante*/
function siguenteImagen (){

    lugar = lugar + 1 ;
    if (lugar == 3) {   //cuando lugar sea igual a 3 debe volver a la posición 0
       
        lugar = 0;
    }

    img.src = carruselImg[lugar]; //el src de la imagen es igual al lugar del array carruselImg
    links.href = arrayLinks[lugar]; //El href de etiqueta a es igual lugar del array de links
}

/*Mueve carrusel de imagenes hacia atrás*/
function imagenAntes (){

    lugar = lugar - 1 ; //cuando lugar sea igual a -1 debe volver a la posición 2
    if (lugar == -1) {  
 
        lugar = 2;
    }

    img.src = carruselImg[lugar];
    links.href = arrayLinks[lugar];
}
/*Mueve carrusel de imagenes cada 6 segundos*/
let intervalo = setInterval(siguenteImagen, 6000);

/* Para el envio del formulario*/
function noEnviar(e){

    e.preventDefault(); 
}


window.onload = manejaEventos; 