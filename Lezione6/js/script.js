// Quando uso getElementById() tra le parentesi ci va l'id dell'elemento che volgio recuperare
let demo = document.getElementById("demo");

// Voglio scrivere all'interno di demo
demo.innerHTML = "Ciao Dario";
demo.innerHTML = "<h2> Ciao Dario </h2>"

let feedback = document.getElementById("feedback");
// Voglio scrivere all'interno di feedback
// feedback.innerHTML = "Ciao Sardo";
feedback.innerHTML = "<h4> OIA TI DEPISI GODI SA VIDA!</h4>";

// Calcolatrice Scema
let dati = document.getElementById("dati");
let somma = document.getElementById("somma");
let differenza = document.getElementById("differenza");
let prodotto = document.getElementById("prodotto");
let quoziente = document.getElementById("quoziente");

let numero1 = 12;
let numero2 = 4;

let risultatoSomma = numero1 + numero2; //16
let risultatoDifferenza = numero1 - numero2; //8
let risultatoProdotto = numero1 * numero2; //48
let risultatoQuoziente = numero1 / numero2; //3

// devo stampare i risultati e i miei dati
dati.innerHTML = "I numeri di partenza sono : " + numero1 + " , " + numero2 + "</h2>";
somma.innerHTML = "<p> Il Somma vale: " + risultatoSomma + "</p>";
differenza.innerHTML = "<p> Il Differenza vale: " + risultatoDifferenza + "</p>";
prodotto.innerHTML = "<p> Il Prodotto vale: " + risultatoProdotto + "</p>";
quoziente.innerHTML = "<p> Il Quoziente vale: " + risultatoQuoziente + "</p>";