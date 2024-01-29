let username = "Dario";
let password = "1234";
let statoAccesso = false; 
let tipoAccount = "Premium";

// TUTTO GIUSTO + ACCOUNT ONLINE
if (username == "Dario" && password == "1234") {
    console.log("Benvenuto " + username);
    statoAccesso = true;

// USERNAME GIUSTO MA PASSWORD SBAGLIATO
} else if(username == "Dario" && password != "1234"){
    console.log("GG, ma hai sbagliato la password. Vecho non puoi entrare!! e BECCATI STO TRAPEZIo!");

// USERNAME SBAGLIATO MA PASSWORD GIUSTA
}else if (username != "Dario" && password == "1234") {
    console.log("GG, ma hai sbagliato la username. Vecho non puoi entrare!! e BECCATI STO TRAPEZIo!")

// HAI SBAGLIATO TUTTO
}else{
    console.log("Babbo, Hai Sbagliato TUTTO");
}

// ---

// ACCOUNT PREMIUM
if(statoAccesso == true && tipoAccount == "Premium"){
    console.log("Hai accesso a tutti i contenuti della piattaforma");

// ACCOUNT STANDARD
}else if(statoAccesso == true && tipoAccount == "Standard"){
    console.log("Non sei Premium, abbonati a Premium per avere le ultime funzionalità e vantaggi esclusivi.");

// Non hai SCELTO ACCOUNT (PREMIUM O STANDARD)
}else if(statoAccesso == true && (tipoAccount != "Standard" || tipoAccount != "Premium"))
{ console.log("Non ha scelto un tipo di Account. Ma ti consigliatmo Premium per avere le ultime funzionalità e vantaggi esclusivi.");

// Non hai EFFETTUATO ACCESSO
}else{
    console.log("Non hai ancora efettuato l'acceso");
}