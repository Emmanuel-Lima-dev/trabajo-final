//efecto al scrollear en la sección historia


const parrafos=document.querySelectorAll(".cont-text-his");
const card=document.querySelectorAll(".card");
const lengthParrafo=parrafos.length;
const lengthCard= card.length;


window.addEventListener("scroll", ()=>{

    for (let i = 0; i < lengthParrafo; i++) {

        let distancia = parrafos[i].getBoundingClientRect().top; // calculo la distancia superior de cada parrafo.
        let altura = window.innerHeight; //obtengo la altura de la pantalla.

        if (distancia<altura) {
             parrafos[i].classList.add("aparece");
        } else {
             parrafos[i].classList.remove("aparece");
        }
    }

//efecto en las cards seccion inicio

    for (let i = 0; i < lengthCard; i++) {

        let distancia = card[i].getBoundingClientRect().top; // calculo la distancia superior de cada card.
        let altura = window.innerHeight; //obtengo la altura de la pantalla.

        if (distancia<altura) {
             card[i].classList.remove("cardEfect");
        } else {
             card[i].classList.add("cardEfect");
        }
    }
});

//evento rompecabeza               ...en este caso elegí poner los eventos en el archivo html para no estar repitiendo el mismo evento en cada nodo.

const imagen1=document.querySelector("#img1");
const imagen2=document.querySelector("#img2");
const imagen3=document.querySelector("#img3");
const btnReiniciar=document.querySelector("#btn-reiniciar");
const bienHecho=document.createElement("div"); // contenedor del mensaje que aparece al finalizar el rompecabezas.
const main=document.querySelector("main");
let verificador=["","",""]; //este array lo uso para validar los contenedores del rompecabezas en caso de que esten vacios o no y para verificar las posiciones de las imagenes del mismo.

const inicioArrastre=(e)=>{
     e.dataTransfer.setData("text",e.target.id);
};

const prevenirPorDefecto=(event)=>event.preventDefault();

let eventoDrop=(event)=>{
     // los contenedores tienen id = 0; 1 y 2 para usar como referencia en los indices del array vacio.
     if (verificador[parseInt(event.target.id)]=="") {
          let data = event.dataTransfer.getData("text");
          event.target.appendChild(document.getElementById(data));
          event.target.firstElementChild.classList.add("none");
          verificador[parseInt(event.target.id)]=data;
     }
     if (verificador[0]!="" && verificador[1]!="" && verificador[2]!="") {
          if (verificador[0]== "img2" && verificador[1]=="img1" && verificador[2]=="img3") {
               bienHecho.innerHTML=`<h1>¡BIEN HECHO! :D</h1>`;
               bienHecho.classList.remove("mal-hecho");
               bienHecho.classList.add("bienHecho");
               main.appendChild(bienHecho);
          } else {
               bienHecho.innerHTML=`<h1>intentalo de nuevo :(</h1>`;
               bienHecho.classList.remove("bienHecho");
               bienHecho.classList.add("mal-hecho");
               main.appendChild(bienHecho);
          }
     }
};

btnReiniciar.addEventListener("click", ()=>{
     let contImagenes=document.querySelector("#cont-img-rompe");
     let generadorAleatoriedad =+ Math.floor(Math.random() * 4);
     // para que las imagenes se reacomoden de forma aleatorea aunque usé un método poco práctico.
     if (generadorAleatoriedad==0) {
          contImagenes.appendChild(imagen1);
          contImagenes.appendChild(imagen2);
          contImagenes.appendChild(imagen3);
     } else if (generadorAleatoriedad==1) {
          contImagenes.appendChild(imagen3);
          contImagenes.appendChild(imagen2);
          contImagenes.appendChild(imagen1);
     }else if (generadorAleatoriedad==2) {
          contImagenes.appendChild(imagen3);
          contImagenes.appendChild(imagen1);
          contImagenes.appendChild(imagen2);
     } else if (generadorAleatoriedad==3) {
          contImagenes.appendChild(imagen1);
          contImagenes.appendChild(imagen3);
          contImagenes.appendChild(imagen2);
     };
     
     (document.querySelector("#p1")).classList.remove("none");
     (document.querySelector("#p2")).classList.remove("none");
     (document.querySelector("#p3")).classList.remove("none");
     verificador=["","",""];
     if (main.appendChild(bienHecho)) {
          main.removeChild(bienHecho);
     }
});



