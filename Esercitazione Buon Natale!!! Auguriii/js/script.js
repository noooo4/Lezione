// 1. Costruire 5 variabile
let nome = "Nouha"
let cognome = "Bouidra"
let data = "2000"
let anno = new Date().getFullYear();
let giorniNatale = 3;

// 2. Stampare variabilo
console.log("Nome : " + nome)
console.log("Cognome : " + cognome)
console.log("Data : " + data);
console.log("Anno : " + anno)
console.log("giorniNatale : " + giorniNatale);

// 5.Calcolo Giorni a Natale
if (giorniNatale >= 7) {
    console.log("Manca una settiamna");
} else if (giorniNatale < 7 && giorniNatale > 0) {
    console.log("Manca pochissimo");
} else if (giorniNatale === 0) {
    console.log("Buon Natale");
} else {
    console.log("Il natale è gia passato. BABBO!! AUGURI COMUNQUE");
}
