var numeroGiocate;
while (isNaN(numeroGiocate) || numeroGiocate == "") {
    numeroGiocate = prompt("Inserisci il numero di giocate che vuoi fare!");
}

var nComputer = 0;
var nGiocatore = 0;
var nPareggio = 0;
for (var i = 0; i < numeroGiocate; i++){

    var giocatore = Math.ceil(Math.random() * 6);
    var computer = Math.ceil(Math.random() * 6);
    //console.log("Il numero del giocatore è " + giocatore);
    //console.log("Il numero del computer è " + computer);
    var vincitore;
    if (giocatore > computer) {
        //vincitore = "Ha vinto il giocatore!";
        nGiocatore++;
    } else if (computer > giocatore) {
        //vincitore = "Ha vinto il computer!";
        nComputer++;
    } else {
        //vincitore = "Pareggio!";
        nPareggio++;
    }
    //console.log(vincitore);
}
//console.log(nGiocatore, nComputer, nPareggio);


