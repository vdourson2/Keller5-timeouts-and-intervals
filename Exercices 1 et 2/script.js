//Le contenu de str sera affiché à l'écran lettre après lettre, 
//à la vitesse de une lettre par seconde
let str = "Coucou, ca va bien?";
let position = 0;
let section = document.querySelector("div");
let sectionText = document.createTextNode("");
section.appendChild(sectionText);


function tape () {
    sectionText.textContent += str.charAt(position);
    position++;
    //Arrêter la machine quand on est arrivé au bout de str
    if (position == str.length){
        clearInterval(machine);
    }
}

const machine = setInterval(tape,1000);

