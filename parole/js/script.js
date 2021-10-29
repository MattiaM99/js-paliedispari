let parola = prompt('inserisci una parola');
console.log(parola);
let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    document.getElementById('input').innerHTML = 'la tua parola è: ' + parola; 
    document.getElementById('parola').innerHTML = 'la parola è palindroma'
    console.log('la parola è palindroma');
  } else {
    document.getElementById('input').innerHTML = 'la tua parola è: ' + parola; 
    document.getElementById('parola').innerHTML = 'la parola non è palindroma'
    console.log('la parola non è palindroma');
  };
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
};