/*Estructura:
- Variables globales
- Funcionpara los eventos
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
    let dosListas = document.getElementById('listaResponsive'); //remueve clase a listas generales , AGREGAR ANIMACION 
    dosListas.classList.remove('desaparece');

    let botonDonarResponsive = document.getElementById('donaResponsive');//remueve clases a boton
    botonDonarResponsive.classList.remove('desaparece');
}

/*Con esto desaparece menu cortina*/
function desapareceCortina (){

    let cortina = document.getElementById('cortina');
    cortina.style.width = '0';

          /*Permite dar una transición a las listas para que al cerra header responsive, desaparezcan de forma suave */
    let dosListas = document.getElementById('listaResponsive'); //desaparecen las listas generales, AGREGAR ANIMACION
    dosListas.classList.add('desaparece');

    let botonDonarResponsive = document.getElementById('donaResponsive'); //desaparece boton donar
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

window.onload =  manejaEventos;