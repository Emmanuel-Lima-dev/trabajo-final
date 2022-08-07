//menu amburguesa

const menuHambur=document.getElementById("cont-hamburguesa");
const menuResponsive=document.querySelector(".ul");
const span1=document.querySelector(".span1");
const span2=document.querySelector(".span2");
const span3=document.querySelector(".span3");

menuHambur.addEventListener("click", ()=>{

        menuResponsive.classList.toggle("aparece-menu");
        span1.classList.toggle("span1efecto");
        span1.classList.toggle("segundoSpan1");    
        span2.classList.toggle("span2efecto");
        span3.classList.toggle("span3efecto");
        menuHambur.classList.toggle("fixed");  
        
    
});