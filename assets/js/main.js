/*

Esercizio di oggi: calcolo del prezzo del biglietto del treno

//Descrizione://

//Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere

Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

MILESTONE 3:
Ora che la logica è funzionante in pagina, 
possiamo andare a dedicarci allo stile, 
raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/

/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console. 
*/
//Stesso ragionamento dell'esercizio precedente 

//Chiedo i dati all'utente 
//const km = Numero(prompt('Quanti km vuole percorrere ?'));
//const age = Numero(prompt('Quanti anni ha ?'));

//Calcolo il prezzo base
//const ticketPrice = 0.21;
//let normalPrice = km * ticketPrice;
//Occhio che con const non si può cambiare valore

//Calcolo il prezzo con gli sconti
/*if (age < 18){
    normalPrice = (normalPrice - normalPrice * 20 / 100);
} else if (age >= 65){
    normalPrice = (normalPrice - normalPrice * 40 / 100);
}

const fullPrice = normalPrice.toFixed(2);

//Logging
console.log(normalPrice);
console.log(fullPrice);
*/

/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante 
allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e 
visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, 
andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

const form = document.getElementById('trainForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form Load!");
})

//Dati utente 
const userName = document.getElementById('inputName');
const km = parseFloat(document.getElementById('inputKm').value);
const age = parseInt(document.getElementById('inputAge').value);

const ticketPrice = 0.21;
let normalPrice = km * ticketPrice;
console.log(normalPrice);
let discount = "Biglietto Standard";

if (age < 18) {
    normalPrice = (normalPrice - normalPrice * 20 / 100);
    console.log(normalPrice);
    discount = "Biglietto Young";
} else if (age >= 65) {
    normalPrice = (normalPrice - normalPrice * 40 / 100);
    console.log(normalPrice)
    discount = "Biglietto Senior";
}

const fullPrice = normalPrice.toFixed(2);
console.log(fullPrice);


//Risultato

const result = document.getElementById('printTicket');
result.textContent = `Il prezzo del biglietto è € ${fullPrice}`;

const classes = Math.floor(Math.random() * 10 ) + 1;
const codeCP = Math.floor(Math.random() * 10000) + 1000;


//Risultato in tabella
document.getElementById("passengerName").textContent = userName;
document.getElementById("discount").textContent = discount;
document.getElementById("wagon").textContent = classes;
document.getElementById("code").textContent = codeCP;
document.getElementById("priceOfTicket").textContent = fullPrice;
