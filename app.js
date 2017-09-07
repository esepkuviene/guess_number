console.log('Hot or Cold')

//atsitiktinio skaiciaus generavimas
var rand = Math.floor(Math.random() * 100);
console.log(rand)
var randNew = Math.floor(Math.random() * 100);

//html elementu nusiemimas

var winNr = document.querySelector('h2');
var input = document.querySelector('input');
var btn = document.querySelector('button');
var answer = document.querySelector('.answer');
var box = document.querySelector('.wrapper');
var nr = document.querySelector('h3');
var ggg=0

//focus
input.focus();

btn.addEventListener("click", guessNr);

function guessNr() {
    ggg++
    nr.textContent=(ggg);
    console.log(input.value)
    if (input.value > rand) {
        answer.textContent = 'Iveskite mazesni skaiciu'
        answer.style.color = "red";
    } else if (input.value < rand) {
        answer.textContent = 'Iveskite didesni skaiciu'
        answer.style.color = 'blue';
    } else if (input.value == rand) {
        answer.textContent = 'jus atspejote!';
        answer.style.backgroundColor = "yellow";
        answer.style.textTransform = 'uppercase';
        winNr.textContent = rand;
      
    } else {
        console.log('error')
    }
    //    input.value='';
    //    input.focus();
}
box.addEventListener('click', changeColor);

function changeColor() {
    if (box.style.backgroundColor == "white") {
        box.style.backgroundColor = "grey";
        console.log(1)

    }else if (box.style.backgroundColor == "grey") {
        box.style.backgroundColor = "white";
        console.log(6)

    }
}

////Kintamuju terpe
//var x=0; // globalieji kintamieji
//function changeIt(){
//    x=1;
//    var y=1;
//}
//changeIt();
//console.log(x);
//console.log(y);

//ND Atspeju skaiciu perrasyti h2 reiksme i atspeto skaiciaus reiksme;
//Paspaudus ant balto remelio, pakeisti jo spalva;
// Suskaiciuoti kiek kartu buvo bandyta speti (nauajs div elementas.);
// jei skaicius mazesnis, texto iveskite did. skaiciu, spalva bus raudona, o jei didesne - melyna.
// Atspejus skaiciu paleisti nauja zaidima
