"use strict";

console.clear();

// Consegna:
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
// accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi 

/* ----------------------------------------------------------------------------- */

// Dichiarare le variabili degli elementi che servono per cambiare 
// dinamincamente la pagina.

const off = document.getElementById("off");
const btn = document.getElementById("light-switch");



btn.addEventListener("click", function() {
    if(off.src.includes("img/white_lamp.png")){
    off.src = "./img/yellow_lamp.png";
    off.alt = "on";
    btn.innerHTML = "Click to turn off the light";
    } else {
        off.src = "./img/white_lamp.png";
        off.alt = "off";
        btn.innerHTML = "Click to turn on the light";
    }    
})