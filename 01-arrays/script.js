const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

 console.log(teachers); //stampo tuttp l'arrey
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
let fourthTeacher = null;
fourthTeacher=teachers[3];
console.log("assegno il 4 insegnante in una variabile:", fourthTeacher);// stampo la variabile del 4 arrey-item
// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4]="Patrick";
 console.log("sostituisco il 5 insegnante:", teachers);//stampo nuovamente tutto l'arre ma con il valore modificato
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
let lastTeacher = null;
lastTeacher =teachers.pop();
console.log("stampo l'ultimo elemento dell'arrey nella nuova variabile:", lastTeacher); //salvo e stampo la variabile da eliminare
console.log("lista aggiornata senza l'ultimo elemento:", teachers); //stampo nuovamenrte la variabile teachers ma senza l'ultimo elemento

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
 let firstTeacher = null;
 firstTeacher = teachers.shift();
 console.log("stampo il primo elemento dell'arrey nella nuova variabile:", firstTeacher); //salvo e stampo la variabile da eliminare

 console.log("lista aggiornata senza il primo elemento:", teachers); //stampo nuovamenrte la variabile teachers ma senza il primo elemento
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa"); //aggiungo Vanessa come isegnante
console.log("lista aggiornata con la nuova insegnante:", teachers);
// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("sarah"); //aggiungo Sarah come isegnante all'inizio dell'array
console.log("lista aggiornata con la nuova insegnante:", teachers);
// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex = null;
lewisIndex= teachers.indexOf("Lewis");
console.log("L'indice di Lewis è:", lewisIndex);
// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;