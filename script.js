const memories = [

    "historia ❤️",

    "viajes ✈️",

    "Roblox 🎮",

    "Brawl Stars ⭐",

    "Stardew Valley 🌱",

    "clases de ruso 🇷🇺",

    "estudiar 📚",

    "juntos ❤️",

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


    },300);



},3000);
