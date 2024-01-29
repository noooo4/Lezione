//Esercitazione Cicli-For
//Crea un array con i seguenti voti [100, 20, 50, 60, 65, 55, 80, 95]
//Scorri l'array e controlla i voti.
// Quando il voto è minore di 60 stampa un asterisco * accanto al voto.
// Quando invece è maggiore o uguale a 60 stampa una A accanto al voto. 
// Quando il voto è 100 stampa AAA accanto al voto.

// Crea un array con i seguenti voti.
const voti = [100, 20, 50, 60, 65, 55, 80, 95];

// Scorri l'array e controlla i voti
for (let i = 0; i < voti.length; i++) {
    const voto = voti[i];

    // Controlla le condizioni e stampa il risultato accanto al voto
    if (voto < 60) {
        console.log(voto + "Mi dispiace Non cè l'hai fatta(*)" );
    } else if (voto === 100) {
        console.log(voto + "Che BOOMBER (AAA)" );
    } else {
        console.log(voto + "Sei passato(A)" );
    }
}
