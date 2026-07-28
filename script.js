const memories = [

    "Viajes ✈️",

    "Roblox 🎮",

    "Brawl Stars ⭐",

    "Stardew Valley 🌱",

    "Clases de ruso 🇷🇺",

    "Estudiar 📚",

    "Juntos ❤️",

    "*** ✨"

];


let memoryIndex = 0;


const memoryText = document.getElementById("changing-text");



setInterval(()=>{


    memoryText.classList.remove("change");


    setTimeout(()=>{


        memoryIndex++;


        if(memoryIndex >= memories.length){

            memoryIndex = 0;

        }


        memoryText.textContent = memories[memoryIndex];


        memoryText.classList.add("change");


    },500);



},3000);
