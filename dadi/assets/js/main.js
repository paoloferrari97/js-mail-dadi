var giocatore = Math.ceil(Math.random() * 6);
var computer = Math.ceil(Math.random() * 6);
console.log(giocatore, computer);
document.getElementById("giocatore").innerHTML = "Il numero del giocatore è " + giocatore;
document.getElementById("computer").innerHTML = "Il numero del computer è " + computer;
var vincitore;
if (giocatore > computer) {
    console.log("Ha vinto il giocatore");
    vincitore = "Ha vinto il giocatore";
} else if (computer > giocatore) {
    console.log("Ha vinto il computer");
    vincitore = "Ha vinto il computer";
} else {
    console.log("Pareggio");
    vincitore = "Pareggio";
}
document.getElementById("vincitore").innerHTML = vincitore;