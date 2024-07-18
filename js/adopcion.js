/*Estructura:
- Variables globales
- Funcion para los eventos
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

/* ARRAY DE OBJETOS*/
/*Son 2 array de objetos que contienen la información de las diferentes cardS. Cada for genera la estructura de 
un div que contiene dos article, el primero para la imagen y el segundo para el texto, cada uno va asociado
a su respectivo div con id que esta en html*/
let arrayPerros = [

{ nombre: 'Nombre: Max.',  
  sexo: 'Sexo: Macho.',
  edad: 'Edad: 3 años.',
  url: '../img/perro1x1400.webp',
  descripcion: 'Te presento a Max, un hermoso amigo que está buscando un nuevo hogar lleno de amor y aventuras. Con su pelaje brillante y sus ojos expresivos, Max captura la atención y el corazón de todos los que lo conocen'
},

{ nombre: 'Nombre: Vicky.',
  sexo: 'Sexo: Hembra.',
  edad: 'Edad: 1 año.',
  url: '../img/perro2x1400.webp',
  descripcion: 'Vicky es una encantadora perrita que está buscando un hogar donde pueda dar y recibir mucho amor.  Su naturaleza juguetona y su aguda inteligencia la hacen la compañera perfecta para una familia activa.'
},

{ nombre: 'Nombre: Luna.',
  sexo: 'Sexo: Hembra.',
  edad: 'Edad: 2 años.',
  url: '../img/perro3x1400.webp',
  descripcion: 'Luna te esta esperando!. Su espíritu juguetón y su amor incondicional la convierten en una excelente compañera para cualquier familia. Se lleva bien con otros perros y puede adaptarse a vivir con gatos tras una adecuada introducción.'
},

{ nombre: 'Nombre: Manolo.',
  sexo: 'Sexo: Macho.',
  edad: 'Edad: 6 meses.',
  url: '../img/perro4x1400.webp',
  descripcion: 'Manolo esta lleno de energía y siempre está listo para jugar. Adora los juguetes, correr por el jardín y jugar a la pelota. Busca una familia que le ofrezca amor, paciencia y cuidados.'
}
    
];

let divPerros = document.getElementById ("perros");

for (let i = 0; i < arrayPerros.length; i++) {

    divPerrosContenedor = document.createElement('div');
    divPerrosContenedor.classList.add('seccionCardsAnimales__divContenedor')

    articleImgP = document.createElement("article");
    articleImgP.innerHTML = ` <img src = "${arrayPerros[i].url}" alt = "Perros adopción" class = "seccionCardsAnimales__imagen" loading="lazy">`;     
    

    articleImgP.classList.add("seccionCardsAnimales__articleImg"); //CLASE

    divPerrosContenedor .appendChild(articleImgP);


    articleTextoP = document.createElement ('article');
    articleTextoP.innerHTML = `<p class = 'seccionCardsAnimales__parrafo'> ${arrayPerros[i].nombre} </p>`+
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayPerros[i].sexo} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayPerros[i].edad} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayPerros[i].descripcion} </p>`; 

    articleTextoP.classList.add("seccionCardsAnimales__articleTexto"); //CLASE

    divPerrosContenedor.appendChild(articleTextoP);

    divPerros.appendChild(divPerrosContenedor);
   
}

let arrayGatos = [
    {   nombre: 'Nombre: Magnolia.',  
        sexo: 'Sexo: Hembra.',
        edad: 'Edad: 7 meses.',
        url: '../img/gato1x1000.webp',
        descripcion: 'Esta dulce felina tiene una personalidad que enamora a cualquiera. Es extremadamente cariñosa y le encanta pasar tiempo con las personas, ya sea acurrucada en su regazo o siguiéndote por la casa.'
      },
      
      { nombre: 'Nombre: Roberto.',
        sexo: 'Sexo: Macho.',
        edad: 'Edad: 4 años.',
        url: '../img/gato2x1400.webp',
        descripcion: 'Roberto es juguetón y curioso, siempre listo para una sesión de juego con juguetes interactivos o una simple bola de papel. Le encanta trepar y explorar, por lo que un árbol para gatos sería ideal para él.'
      },
      
      { nombre: 'Nombre: Paco.',
        sexo: 'Sexo: Macho.',
        edad: 'Edad: 10 meses.',
        url: '../img/gato3x1400.webp',
        descripcion: 'Este encantador felino es un verdadero compañero. Paco es afectuoso y le encanta recibir mimos y caricias. No hay nada que disfrute más que acurrucarse junto a sus humanos después de un día de exploraciones y juegos.'
      },
      
      { nombre: 'Nombre: Emi.',
        sexo: 'Sexo: Hembra.',
        edad: 'Edad: 1 año.',
        url: '../img/gato4x1400.webp',
        descripcion: 'Esta adorable gatita ya está lista para integrarse a una familia que le brinde todo el amor y cuidados que merece. Emi tiene un carácter tranquilo y afectuoso, por lo que se adapta bien tanto a hogares con niños como a aquellos más serenos.'
      }

];

let divGatos = document.getElementById ("gatos");

for (let i = 0; i < arrayGatos.length; i++) {

    divGatosContenedor = document.createElement('div');
    divGatosContenedor.classList.add('seccionCardsAnimales__divContenedor')

    articleImgP = document.createElement("article");
    articleImgP.innerHTML = ` <img src = "${arrayGatos[i].url}" alt = "Gatos adopción" class = "seccionCardsAnimales__imagen" loading="lazy">`;     
    

    articleImgP.classList.add("seccionCardsAnimales__articleImg"); //CLASE

    divGatosContenedor .appendChild(articleImgP);


    articleTextoP = document.createElement ('article');
    articleTextoP.innerHTML = `<p class = 'seccionCardsAnimales__parrafo'> ${arrayGatos[i].nombre} </p>`+
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayGatos[i].sexo} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayGatos[i].edad} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayGatos[i].descripcion} </p>`; 

    articleTextoP.classList.add("seccionCardsAnimales__articleTexto"); //CLASE

    divGatosContenedor.appendChild(articleTextoP);

    divGatos.appendChild(divGatosContenedor);
   
}

let arrayAbuelitos = [

    { nombre: 'Nombre: Lalo.',
      sexo: 'Sexo: Macho.',
      edad: 'Edad: 8 años.',
      url: '../img/perroa1x1200cd.webp',
      descripcion: 'Barto es un perro dulce y leal, siempre dispuesto a ofrecer amor y compañía. Es paciente y gentil, por lo que se lleva bien con niños de todas las edades.'
    },

    {  nombre: 'Nombre: Otto.',  
       sexo: 'Sexo: Macho.',
       edad: 'Edad: 9 años.',
       url: '../img/gatoa1x1400cd.webp',
       descripcion: 'Otto es un gato tranquilo y cariñoso. Le encanta pasar tiempo con las personas y recibir mimos. A pesar de su edad, tiene mucha energía para jugar, especialmente con sus juguetes favoritos.'
    },
      
    { nombre: 'Nombre: Willy.',
      sexo: 'Sexo: Macho.',
      edad: 'Edad: 11 años.',
      url: '../img/perroa2x1200cd.webp',
      descripcion: 'Willy tiene algunas canas y se muevo un poco más despacio, pero aún tiene mucho amor para dar. Tiene chequeos veterinarios regulares y sus controles están al día.'
    },
      
    { nombre: 'Nombre: Violeta.',
      sexo: 'Sexo: Hembra.',
      edad: 'Edad: 10 años.',
      url: '../img/gatoa2x1400.webp',
      descripcion: 'Violeta es una gata dulce y cariñosa que disfruta de la tranquilidad y la compañía. Es muy afectuosa y le encanta ronronear para mostrar su felicidad. Tiene buenos modales y no suele arañar los muebles.'
    }

];

let divAbuelitos = document.getElementById ("abuelos");

for (let i = 0; i < arrayGatos.length; i++) {

    divAbuelosContenedor = document.createElement('div');
    divAbuelosContenedor.classList.add('seccionCardsAnimales__divContenedor')

    articleImgP = document.createElement("article");
    articleImgP.innerHTML = ` <img src = "${arrayAbuelitos[i].url}" alt = "Abuelitos adopción" class = "seccionCardsAnimales__imagen" loading="lazy">`;     
    

    articleImgP.classList.add("seccionCardsAnimales__articleImg"); //CLASE

    divAbuelosContenedor .appendChild(articleImgP);


    articleTextoP = document.createElement ('article');
    articleTextoP.innerHTML = `<p class = 'seccionCardsAnimales__parrafo'> ${arrayAbuelitos[i].nombre} </p>`+
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayAbuelitos[i].sexo} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayAbuelitos[i].edad} </p>` +
                             `<p class = 'seccionCardsAnimales__parrafo'> ${arrayAbuelitos[i].descripcion} </p>`; 

    articleTextoP.classList.add("seccionCardsAnimales__articleTexto"); //CLASE

    divAbuelosContenedor.appendChild(articleTextoP);

    divAbuelitos.appendChild(divAbuelosContenedor);
   
}


/* TERMINA ARRAY DE OBJETOS*/

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



window.onload = manejaEventos; 