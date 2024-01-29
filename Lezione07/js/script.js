// OPERATORI DI CONFRONTO
// Tutte le volte che uso un operatore di confronto genero un tipo boolenano

let num1 = 10;
let num2 = 10;

// confronto i due numeri
//  == ->è  uguale a
let confronto1 =(num1 == num2); //TRUE
console.log(confronto1);

// != -> Non è uguale a
let confronto2 = (num1 != num2); //FALSE
console.log(confronto2);

// <Maggiore <Minore
let confronto3 = (num1 > num2); //FALSE
let confronto4 = (num1 < num2); //FALSE
console.log(confronto3);
console.log(confronto4)

let confronto5 = (num1 >= num2); //TRUE
let confronto6 = (num1 <= num2); //TRUE

//TUTTE QUESTE VARIABILI DI CONFRONTO POSSONO ESSERE UTILIZZATE NEGLI IF

let mioNome = "Dario";
let tuoNome = "dario";

let confronto7 = (mioNome != tuoNome); //TRUE, poiche Javascript è CASE-SENSITIVE
console.log(confronto7);

// ESEMPIO IF

let etaBugi = 18;
let etaAccesso = 18;

if(etaBugi >= etaAccesso){
     //Questa parte viene eseguita solo se la condizione è vera
    console.log("Benvenuto Alessio, puoi entrare!");
}else{
    //Questa parte viene eseguita solo se la condizione è falsa
    console.log("Non puoi, TORNA A CASA!");
}

////Faccio un altro controllo
let meteo = "Sole";

if( meteo == "Sole"){
    console.log("Oggi c'e il sole, metti li occhial scuri");
}else if (meteo == "Pioggia"){
    console.log("Oggi piove, porta gli ombrelli");
}else if (meteo == "Nebbia"){
    console.log("Stai a casa che non vedi niente");
}else if(meteo == "Neve"){
    console.log("La Neveeee!!");
}else{
    console.log("No info, GG");
}
// ATTENZIONE: Gli if si chiudono sempre con else



