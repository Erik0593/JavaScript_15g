//Ejercicio 1
let word = prompt('Favor de poner la palabra a transformar').toLowerCase()
alert(word[0].toUpperCase() + word.slice(1))

//Ejercicio 2
let sentence = prompt("Por favor poner una palabra con espacios").trim().toLowerCase()
let newSentence = " "
for (i = 0; i <= sentence.length - 1; i++) {
  if (sentence[i] == sentence[0] && i == 0 || sentence[i - 1] == " ") {
    newSentence += sentence[i].toUpperCase();
  } else {
    newSentence += sentence[i];
  }
}
console.log(newSentence);

//Ejercicio 3
let subjects = parseInt(prompt('Introduce cuantas materias tienes'))
let totalfinal = 0, cal = 0
for(i = 1; i <= subjects; i++){
    cal = parseInt(prompt(`Cual es la calificacion de la materia ${i}?`))
    totalfinal += cal
}
console.log(`la calificacion final es ${totalfinal/subjects}`)