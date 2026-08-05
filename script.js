const photos = [];

for(let i = 1; i <= 20; i++){

    photos.push(`fotos/${i}.jpeg`);

}

let index = 0;
let timer = null;
let paused = false;

const img = document.getElementById("photo");
const pauseBtn = document.getElementById("pauseBtn");



function changePhoto(){

    img.classList.remove("show");

    setTimeout(()=>{

        img.src = photos[index];

        img.onload = ()=>{

            img.classList.add("show");

        };

        index++;

        if(index >= photos.length){

            index = 0;

        }

    },500);

}



function startSlideshow(){

    changePhoto();

    timer = setInterval(changePhoto,5000);

}



function pauseAlbum(){

    paused = true;

    clearInterval(timer);

    timer = null;

    pauseBtn.style.display = "block";

    pauseBtn.innerHTML = "▶";

}



function resumeAlbum(){

    paused = false;

    pauseBtn.style.display = "none";

    changePhoto();

    timer = setInterval(changePhoto,5000);

}



function togglePause(){

    if(paused){

        resumeAlbum();

    }else{

        pauseAlbum();

    }

}



// Funciona con ratón, móvil y tablet

document.body.addEventListener("pointerdown",(e)=>{

    // Ignorar el botón para evitar doble ejecución
    if(e.target === pauseBtn){

        return;

    }

    togglePause();

});



// El botón también cambia entre pausa y reproducción

pauseBtn.addEventListener("pointerdown",(e)=>{

    e.stopPropagation();

    togglePause();

});



startSlideshow();
