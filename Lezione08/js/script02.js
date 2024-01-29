// Es.1 - Dati 2 numeri scrivi un programma in js che mostra il piu grande tra i due.
// Dati due numeri
var numero1 = 5;
var numero2 = 8;

// Confronto per trovare il più grande
if (numero1 > numero2) {
    console.log("Il numero più grande è: " + numero1);
} else if (numero2 > numero1) {
    console.log("Il numero più grande è: " + numero2);
} else {
    console.log("I numeri sono uguali.");
}
// ---

// Es.2 - Dati solo 3 nomiUser verifica che tutti e 3 siano corretti. Quando uno o più sono sbagliati avvisa in console.
// Dati tre nomi utente
var nomeUser1 = "Alice";
var nomeUser2 = "Bob";
var nomeUser3 = "Charlie";

// Verifica che tutti e tre siano corretti
if (verificaNomeUtente(nomeUser1) && verificaNomeUtente(nomeUser2) && verificaNomeUtente(nomeUser3)) {
    console.log("Tutti e tre i nomi utente sono corretti.");
} else {
    console.log("Almeno uno dei nomi utente è sbagliato. Controlla la console per dettagli.");
}

// Funzione per verificare un singolo nome utente
function verificaNomeUtente(nome) {
    // Puoi aggiungere le condizioni necessarie per verificare la correttezza del nome utente
    // Ad esempio, lunghezza minima, caratteri consentiti, ecc.
    return nome.length >= 3; // Esempio: verifica se la lunghezza del nome è almeno 3
}
// ---

// Es.3 - Dati 2 numeri compresi tra 0 e 100 verifica chi è più vicino a 100.
// Dati due numeri compresi tra 0 e 100
var numero1 = 75;
var numero2 = 90;

// Verifica chi è più vicino a 100
var distanza1 = Math.abs(100 - numero1);
var distanza2 = Math.abs(100 - numero2);

if (distanza1 < distanza2) {
    console.log("Il numero " + numero1 + " è più vicino a 100.");
} else if (distanza2 < distanza1) {
    console.log("Il numero " + numero2 + " è più vicino a 100.");
} else {
    console.log("I due numeri sono alla stessa distanza da 100.");
}
// ---

// Es.4 - Dati 2 numeiri compresi tra 0 e 200 verifica chi è più vicino al 100.
// Dati due numeri compresi tra 0 e 200
var numero1 = 75;
var numero2 = 150;

// Verifica chi è più vicino al 100
var distanza1 = Math.abs(100 - numero1);
var distanza2 = Math.abs(100 - numero2);

if (distanza1 < distanza2) {
    console.log("Il numero " + numero1 + " è più vicino al 100.");
} else if (distanza2 < distanza1) {
    console.log("Il numero " + numero2 + " è più vicino al 100.");
} else {
    console.log("I due numeri sono alla stessa distanza dal 100.");
}

