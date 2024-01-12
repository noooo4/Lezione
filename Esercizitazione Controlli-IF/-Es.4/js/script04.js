// Dati due numeri compresi tra 0 e 200
var numero1 = 75;var numero1 = 75;
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