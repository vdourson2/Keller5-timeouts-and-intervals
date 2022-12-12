

let timer = 0;
let section = document.querySelector("div");
let sectionText = document.createTextNode("");
section.appendChild(sectionText);


function time () {
    if (((timer%60) == 0)&& (timer != 0))    {
        sectionText.textContent = (timer/60) + " minute(s) has passed";
    }
    else {
        sectionText.textContent = timer;
    }
    timer++;
}

const machine = setInterval(time,1000);
