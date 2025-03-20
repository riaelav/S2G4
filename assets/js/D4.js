/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  return l1 * l2;
}
let l1 = 8;
let l2 = 3;
console.log("area del rettangolo", area(l1, l2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  const sum = num1 + num2;
  if (num1 !== num2) {
    return sum;
  } else {
    return sum * 3;
  }
}
let num1 = 5;
let num2 = 5;
console.log("somma num1+num2 moltiplicata per tre", crazySum(num1, num2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(num) {
  const diff = Math.abs(num - 19);
  if (num > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
let num = 35;
console.log("differenza assoluta moltiplicata per tre", crazyDiff(num));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.

*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
}

let n = 52;
console.log(boundary(n));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(string) {
  if (string.startsWith("EPICODE")) return string;
  else {
    return "EPICODE" + string;
  }
}

string = " è un corso di formazione per web developer";
console.log(epify(string));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(number) {
  if (number % 3 === 0) {
    return "è divisibile per 3";
  } else if (number % 7 === 0) {
    return "è divisibile per 7";
  } else {
    return "non è divisibile per 3 o 7";
  }
}

let number = 23;
console.log("questo numero", check3and7(number));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let newRevStr = "";
  for (let i = 0; i < str.length; i++) newRevStr = str[i] + newRevStr;
  return newRevStr;
}
let str = "EPICODE";

console.log(reverseString(str));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  const randomNUmber = Math.floor(Math.random() * n);
  return randomNUmber;
}
function giveMeRandomList(limit, range) {
  const list = [];
  for (let i = 0; i < limit; i++) {
    list.push(giveMeRandom(range));
  }
  return list;
}
let limit = 5;
let range = 10;
console.log(giveMeRandomList(limit, range));
