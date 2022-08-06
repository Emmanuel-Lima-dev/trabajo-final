//menu amburguesa

const menuAmbur=document.getElementById("cont-amburguesa");
const menuResponsive=document.querySelector(".ul");
const span1=document.querySelector(".span1");
const span2=document.querySelector(".span2");
const span3=document.querySelector(".span3");
const contAmburguesa=document.querySelector("#cont-amburguesa");

menuAmbur.addEventListener("click", ()=>{

        menuResponsive.classList.toggle("aparece-menu");
        span1.classList.toggle("span1efecto");
        span1.classList.toggle("segundoSpan1");    
        span2.classList.toggle("span2efecto");
        span3.classList.toggle("span3efecto");
        contAmburguesa.classList.toggle("fixed");  
        
    
});