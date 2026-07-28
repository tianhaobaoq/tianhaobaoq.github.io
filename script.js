const photos=[];

const TOTAL=20; // cambia según tus fotos


for(let i=1;i<=TOTAL;i++){

    photos.push(`fotos/${i}.jpg`);

}


let index=0;

const img=document.getElementById("photo");



function startAlbum(){


    document.getElementById("popup").style.display="none";


    changePhoto();


    setInterval(changePhoto,5000);


}



function changePhoto(){


    img.classList.remove("show");


    setTimeout(()=>{


        img.src=photos[index];


        img.onload=()=>{

            img.classList.add("show");

        };


        index++;


        if(index>=photos.length){

            index=0;

        }


    },700);


}
