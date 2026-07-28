const photos=[];

// Cambia este número por la cantidad de fotos que tengas
const TOTAL=20;

for(let i=1;i<=TOTAL;i++){
    photos.push(`fotos/${i}.jpg`);
}

const img=document.getElementById("photo");

let index=0;

function changePhoto(){

    img.classList.remove("show");

    setTimeout(()=>{

        img.src=photos[index];

        img.onload=()=>{

            img.classList.add("show");

        }

        index++;

        if(index>=photos.length){
            index=0;
        }

    },700);

}

changePhoto();

setInterval(changePhoto,5000);
