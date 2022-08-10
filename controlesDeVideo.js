
const video=document.querySelector("#video-his"), 
btnPlay=document.querySelector("#btn-play"), 
btnStop=document.querySelector("#btn-stop"), 
barraProgresoVideo=document.querySelector("#barra-progreso-video"), 
duracionVideo=document.querySelector("#duracion-video");



function playPause(){
    if (video.paused) {
        video.play();
        btnPlay.firstChild.src="./assets/imagenes/pausa.svg";
    } else {
        video.pause();
        btnPlay.firstChild.src="./assets/imagenes/play_arrow.svg";
    //otra forma
    // video[video.paused?"play":"pause"]();
}
}
    

video.addEventListener("click", playPause);
btnPlay.addEventListener("click", playPause);
btnStop.addEventListener("click",()=>{
    video.pause();
    video.currentTime = 0;
    btnPlay.firstChild.src="./assets/imagenes/play_arrow.svg";
    barraProgresoVideo.value= 0;
});

barraProgresoVideo.addEventListener("change",()=>{
    video.currentTime=parseInt((barraProgresoVideo.value * video.duration) / 100);
});    

video.addEventListener("timeupdate",()=>{
    barraProgresoVideo.value=parseInt((video.currentTime / video.duration) * 100);

    let segundos = Math.floor(video.currentTime % 60);
    let minutos = Math.floor(video.currentTime / 60);

    if (minutos<10) {
        minutos = "0" + minutos;
    }
    if (segundos<10) {
        segundos = "0" + segundos;
    }

    duracionVideo.textContent=`${minutos}:${segundos}`;
});
    
