// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pariDispari = parseInt(prompt('inserisci un numero da 1 a 5'));
document.getElementById('num-utente').innerHTML = 'il tuo numero è: ' + pariDispari;
console.log(pariDispari);

if (isNaN(pariDispari)) {
  console.log('non è un numero')
};

function numeroRandom(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let pcRandom = numeroRandom(1, 5);
document.getElementById('num-comp').innerHTML = 'il numero del computer è: ' + pcRandom;
console.log(pcRandom);


function somma(parametroPariDispari, parametroPcRandom) {
  let parametroScelta = prompt('pari o dispari?');
  document.getElementById('scelta').innerHTML = 'hai scelto ' + parametroScelta 
  let sommaNumeri = parametroPariDispari + parametroPcRandom;
  if (sommaNumeri % 2 == 0 && parametroScelta == 'pari') {
    console.log('il numero è pari');
    document.getElementById('pari-dispari').innerHTML ='la somma tra i due numeri è ' + sommaNumeri + ' ed è pari, hai vinto';
  }else if (sommaNumeri % 2  && parametroScelta == 'dispari') {
    console.log('il numero è dispari');
    document.getElementById('pari-dispari').innerHTML ='la somma tra i due numeri è ' + sommaNumeri + ' ed è dispari, hai vinto';
  }else if (sommaNumeri % 2 == 0  && parametroScelta == 'dispari') {
    console.log('il numero è pari');
    document.getElementById('pari-dispari').innerHTML ='la somma tra i due numeri è ' + sommaNumeri + ' ed è pari, hai perso';
  }else if (sommaNumeri % 2 && parametroScelta == 'pari') {
    console.log('il numero è dispari');
    document.getElementById('pari-dispari').innerHTML ='la somma tra i due numeri è ' + sommaNumeri + ' ed è dispari, hai perso';
  };
  return sommaNumeri;
};


let risultato = somma(pariDispari, pcRandom);
console.log(risultato);