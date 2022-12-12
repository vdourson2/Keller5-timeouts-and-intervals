let arr = document.querySelectorAll(".cercle");
let indice = 0;
let points = 0;
let score = document.getElementById("score");
let tpsEcoule = [true, true, true, true, true];
score.textContent = 0;

//Fonction qui incrément le nombre de points quand on a cliqué sur le cercle rouge
function increase (indice){
    if (tpsEcoule[indice] == false){
        points += 1;
        console.log("points " + points);
        score.textContent = points;
    }
}

//Fonction qui choisit un cercle aléatoirement, le rend rouge, 
//et ensuite blanc au bout de 0,95 secondes.
function dehors () {
    let rand = Math.floor(Math.random()*5);
    //Condition pour que le même cercle ne soit pas sélectionné deux fois de suite
    while (rand==indice){ 
        rand = Math.floor(Math.random()*5);
    }
    arr[rand].style.backgroundColor = "red";

    tpsEcoule[rand] = false;
    arr[rand].addEventListener('click',function() {increase (rand);});

    setTimeout(() => {arr[rand].style.backgroundColor = "white"; tpsEcoule[rand]=true;},1950);
    indice = rand;
   }

const changer = setInterval(dehors,2000);

//Arrêter le setInterval si on clique sur le bouton "arrêter"
let stop = document.querySelector('button');
stop.addEventListener('click',() => {clearInterval(changer);})

/*for (let ar of array){
    ar.addEventListener('')
}*/
