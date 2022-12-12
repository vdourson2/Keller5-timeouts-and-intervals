let arr = document.querySelectorAll(".cercle");
let indice = 0;

//Fonction qui choisit un cercle aléatoirement, le rend rouge, 
//et ensuite blanc au bout de 0,95 secondes.
function dehors () {
    let rand = Math.floor(Math.random()*5);
    //Condition pour que le même cercle ne soit pas sélectionné deux fois de suite
    while (rand==indice){ 
        rand = Math.floor(Math.random()*5);
    }
    arr[rand].style.backgroundColor = "red";
    setTimeout(() => {arr[rand].style.backgroundColor = "white";},950);
    indice = rand;
   }

const changer = setInterval(dehors,1000);

//Arrêter le setInterval si on clique sur le bouton "arrêter"
let stop = document.querySelector('button');
stop.addEventListener('click',() => {clearInterval(changer);})
