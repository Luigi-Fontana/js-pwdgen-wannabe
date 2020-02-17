/* Primo Esercizio
var name = prompt('Inserisci il tuo Nome');
// console.log(name);
var surname = prompt('Inserisci il tuo Cognome');
// console.log(surname);
var color = prompt('Qual è il tuo colore preferito?');
// console.log(color);
document.getElementById('output').innerHTML = name + surname + color + '20';
*/

var name = prompt('Inserisci il tuo Nome');
// console.log(name);
var surname = prompt('Inserisci il tuo Cognome');
// console.log(surname);
var color = prompt('Qual è il tuo colore preferito?');
// console.log(color);
var data = new Date();
var currentYear = data.getFullYear();
// console.log(currentYear);
document.getElementById('output').innerHTML = name + surname + color + currentYear;
