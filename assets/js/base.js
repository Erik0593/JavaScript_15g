// //Ejercicio 1
// let word = prompt('Favor de poner la palabra a transformar').toLowerCase()
// alert(word[0].toUpperCase() + word.slice(1))

// //Ejercicio 2
// let sentence = prompt("Por favor poner una palabra con espacios").trim().toLowerCase()
// let newSentence = " "
// for (i = 0; i <= sentence.length - 1; i++) {
//   if (sentence[i] == sentence[0] && i == 0 || sentence[i - 1] == " ") {
//     newSentence += sentence[i].toUpperCase();
//   } else {
//     newSentence += sentence[i];
//   }
// }
// console.log(newSentence);

// //Ejercicio 3
// let subjects = parseInt(prompt('Introduce cuantas materias tienes'))
// let totalfinal = 0, cal = 0
// for(i = 1; i <= subjects; i++){
//     cal = parseInt(prompt(`Cual es la calificacion de la materia ${i}?`))
//     totalfinal += cal
// }
// console.log(`la calificacion final es ${totalfinal/subjects}`)

// //Soluciones del Mentor 
// // Exercises


// /*
// 	Pedir al usuario una palabra
// 	Devolver la palabra capitalizada
// 	p.ej. 'galAxiA'
// 	Ouput -> 'Galaxia'
// */
// const wordUser = prompt('Dame una oración').trim().toLowerCase()
// var wordCap = wordUser.substring(0,1).toUpperCase() + wordUser.substring(1)
// console.log(wordCap)

// /*
// 	Pedir al usuario una oración (permitir espacios)
// 	Capitalizar cada una de las palabras de la oración
// 	p.ej. 'En una galaxia muy muy lejana'
// 	Ouput -> 'En Una Galaxia Muy Muy Lejana'
// */


// const word = prompt('Dame una oración').trim().toLowerCase()
// let wordCapitalize = ''
// // en una galaxia
// for(i = 0; i < word.length; i++){
//     if(word[i] == ' '){
//         wordCapitalize += ' ' + word[i + 1].toUpperCase()
//         i = i + 1
//     } else {
//         wordCapitalize = wordCapitalize + word[i]
//     }
// }
// // en Una Galaxia
// wordCapitalize = wordCapitalize.substring(0,1).toUpperCase() + wordCapitalize.substring(1)
// // En Una Galaxia
// console.log(wordCapitalize)



// /*
// 	Pedir al usuario cuantas materias tiene actualmente
// 	Pedir al usuario la calificacion de cada una de esas N materias
// 	Arrojar el promedio en un alert
// */

// let totalSubjects = parseInt( prompt('Total de materias') )
// let total = 0, average = 0, counter = 1;

// while(counter <= totalSubjects){
//     total = total + parseInt(prompt(`Calificación de la materia ${counter}: `))
//     counter++
// }

// average = total / totalSubjects
// alert(`El promedio es: ${average}`)


// let number = 0
// let number2 = 100
// let par = 0

// while(number <= number2){
//     par = number%2 == 0
//     console.log(par)
// }
