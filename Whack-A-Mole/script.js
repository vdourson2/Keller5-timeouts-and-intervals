let arr = document.querySelectorAll(".cercle");
let indice = 0;
let points = 0;
let score = document.getElementById("score");
score.textContent = 0;

//Fonction qui incrémente le nombre de points quand on a cliqué sur le cercle rouge
//et remet la class du cercle à "tpsEcoule"
function increase (e){
    if (e.target.classList.contains("tpsOk")) {
        points += 1;
        score.textContent = points;
        e.target.classList.replace("tpsOk","tpsEcoule")
    }
}

//Fonction qui choisit un cercle aléatoirement, le rend rouge, 
//et ensuite blanc au bout de 0,95 secondes.
function select () {
    //On sélectionne un nombre de 0 à 4 et on s'assure que 
    //ca n'est pas le même nombre qu'au tour précédent
    let rand = Math.floor(Math.random()*5);
    while (rand==indice){ 
        rand = Math.floor(Math.random()*5);
    }
    //Le cercle est coloré en rouge et la classe "tpsEcoule" de l'élément
    //est remplacée par "tpsOk"
    arr[rand].style.backgroundColor = "red";
    arr[rand].classList.replace("tpsEcoule","tpsOk");
    
    //Au bout de 0,99 sec , le cercle est coloré en blanc et la classe "tpsOk" de l'élément
    //est remplacée par "tpsEcoule"
    setTimeout(() => {
        arr[rand].style.backgroundColor = "white";
        arr[rand].classList.replace("tpsOk","tpsEcoule");}
        ,990);

    indice = rand;
   }

for (let ar of arr){
    ar.addEventListener('click',increase);
}

const changer = setInterval(select,1000);

//Arrêter le setInterval si on clique sur le bouton "arrêter"
let stop = document.querySelector('button');
stop.addEventListener('click',() => {clearInterval(changer);})


