var giocatore = Math.ceil(Math.random() * 6);
var computer = Math.ceil(Math.random() * 6);
console.log(giocatore, computer);

if (giocatore > computer) {
    console.log("Ha vinto il giocatore");
} else if (computer > giocatore) {
    console.log("Ha vinto il computer");
} else {
    console.log("Pareggio");
}