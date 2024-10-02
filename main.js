console.log("js linked");


/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// 0) Strumenti conosciuti
/*
- ciclo for
- console.log
- operatori aritmetici, di comparazione e logici
- numeri
- condizionali if/else if/else
*/

// Devo fare un ciclo for con all'interno le if per i multipli di 3, di 5, di entrambi e di nessuno dei 2.
// Ho trovato che posso usare l'operatore % per verificare quando un numero può essere esattamente divisibile per un altro
// inserisco i diversi log nelle diverse if

// 1) Elaborazione dati e Output in console
//ciclo for
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {     // Se metto prima un'altra condizione non entra mai in questa condizione
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

    // si può usare anche la condzionale con switch case
    switch (true) {
        case i % 3 == 0 && i % 5 == 0:
            console.log("Switch Case");
            break;

        case i % 3 == 0:
            console.log("Switch");
            break

        case i % 5 == 0:
            console.log("Case");
            break

        default:
            console.log(i);
            break;
    }
}