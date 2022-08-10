const body=document.querySelector("body"), 
btnTema=document.querySelector(".btn-temas"), 
ampliarMenuTemas=document.querySelector(".cont-menu-temas"),
btnModoOscuro=document.querySelector(".li-temas-2"),
btnTemaPrincipal=document.querySelector(".li-temas-1");

btnTema.addEventListener("click",()=>{
    ampliarMenuTemas.classList.toggle("ampliar-menu-temas");
    
});

btnTemaPrincipal.addEventListener("click", ()=>{
    body.classList.remove("modo-oscuro");
    ampliarMenuTemas.classList.toggle("ampliar-menu-temas");
    localStorage.setItem("tema","modo-normal");
    
});

btnModoOscuro.addEventListener("click", ()=>{
    body.classList.add("modo-oscuro");
    ampliarMenuTemas.classList.toggle("ampliar-menu-temas");

    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema","modo-oscuro");
    } else {
        localStorage.setItem("tema","modo-normal");
    }
});

if (localStorage.getItem("tema")=="modo-oscuro") {
    body.classList.add("modo-oscuro");
} else {
    body.classList.remove("modo-oscuro");
}


