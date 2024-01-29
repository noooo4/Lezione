//  let identifica la variabile
let mioNome = "Dario";
//  let identifica la variabile
let mioCognome = "Menillo";
//  let identifica la variabile
let eta = 34;
// loperatore + viene utilizzato per concatenare le stringhe
let saluto = "Ciao " + mioNome + " " + mioCognome + ", hai " + eta + " anni";
console.log(saluto);

// sistema alternativo pr definire una stringa
// il simbolo [ ` ] si fa con alt+96
let saluto2 = `Ciao ${mioNome} ${mioCognome}, hai ${eta} anni`
console.log(saluto2);

//1. seleziono lelemento nel html in cui voglio stampare. Deve essere UNIVOCO.
// 2. la stringa deve essere identica all' ID.
let elementoSaluto = document.getElementById("elementoSaluto")

// 3. stampo nell'elementoSaluto la mia variabile
elementoSaluto.innerHTML = saluto2;

let elementoDemo = document.getElementById("elementoDemo")

let titoloDemo = "<h2> Calcolatrice </h2>";

let introDemo = "<p> Questa calcolatrice solo il prodotto </p>"

elementoDemo.innerHTML = titoloDemo + introDemo

let elementoFeed = document.getElementById("elementoFeed")

elementoFeed.innerHTML = `<h2>Lista Studenti</h2>
    <ul>
        <li>Marco</li>
        <li>Cristian</li>
        <li>Osman</li>
        <li>Giacomo</li>
    </ul>
`;