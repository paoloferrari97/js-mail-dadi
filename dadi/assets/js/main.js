var giocatore = Math.ceil(Math.random() * 6);
var computer = Math.ceil(Math.random() * 6);
document.getElementById("giocatore").innerHTML = "Il numero del giocatore è " + giocatore;
document.getElementById("computer").innerHTML = "Il numero del computer è " + computer;
var vincitore;
if (giocatore > computer) {
    vincitore = "Ha vinto il giocatore!";
} else if (computer > giocatore) {
    vincitore = "Ha vinto il computer!";
} else {
    vincitore = "Pareggio!";
}
document.getElementById("vincitore").innerHTML = vincitore;