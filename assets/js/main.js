//Chiedi all’utente la sua email
var email = prompt("Inserisci qua la tua email!");
document.getElementById("email").innerHTML = "La tua email è " + email;
//controlla che sia nella lista di chi può accedere
var stampaLista = "Lista email che possono accedere:";
var listaEmail = ["paolo@gmail.com", "luca@gmail.com", "roberto@gmail.com", "mario@gmail.com", "luigi@gmail.com"];
var checkEmail = "La tua email " + email + " non appartiene alla lista, non puoi entrare!";
for (var i = 0; i < listaEmail.length; i++){
    stampaLista = stampaLista + " " + listaEmail[i];
    if (email == listaEmail[i]) {
        checkEmail = "La tua email " + email + " appartiene alla lista! Sei il benvenuto!";
    }
}
document.getElementById("lista_email").innerHTML = stampaLista;
//stampa un messaggio appropriato sull’esito del controllo.
document.getElementById("check_email").innerHTML = checkEmail;