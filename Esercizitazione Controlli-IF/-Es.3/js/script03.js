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