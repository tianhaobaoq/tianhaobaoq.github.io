const photos = [

    "fotos/1.jpg",
    "fotos/2.jpg",
    "fotos/3.jpg"

];


let index = 0;


const img = document.getElementById("photo");



function startAlbum(){


    document.getElementById("popup").style.display="none";


    changePhoto();


    setInterval(changePhoto,5000);


}



function changePhoto(){


    img.classList.remove("show");


    setTimeout(()=>{


        img.src = photos[index];


        img.onload = ()=>{

            img.classList.add("show");

        };


        index++;


        if(index >= photos.length){

            index=0;

        }


    },500);


}
