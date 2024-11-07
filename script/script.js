"use strict";

console.clear();

// Consegna:
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
// accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi 

/* ----------------------------------------------------------------------------- */

// Dichiarare le variabili degli elementi che servono per cambiare 
// dinamincamente la pagina.

const on = document.getElementById("on");
const off = document.getElementById("off");
const btn = document.getElementById("light-switch");


function changeLight() {
    off.classList.toggle
}

btn.addEventListener("click", function() {
    off.src = "./img/yellow_lamp.png";
    off.alt = "on";
})