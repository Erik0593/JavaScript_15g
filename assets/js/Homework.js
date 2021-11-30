// ** 
//  * Ejercicio 1
//  * imprimir en consola todos los numeros pares entre 1 y 100
//  * -> 2
//  * -> 4
//  * -> 100
// */

for (i = 0; i <= 100; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// /**
//  * Ejercicio 2
//  * Pedir al usuario un string
//  * Invertir el orden e imprimir en consola
//  * Entrada: "reverse"
//  * Salida: -> esrever
//  * hint: https://www.w3schools.com/jsref/jsref_length_string.asp
// */

let word = prompt('Agrega una palabra')
let wordreverse = ''

for(i = word.length - 1; i >= 0 ; i--){
          wordreverse = wordreverse + word[i]
      } 
      console.log(wordreverse)

// /**
//  * Ejercicio 3 
//  * Declarar un string de al menos 2 palabras
//  * Imprimir en consola el string separado por guiones en cada palabra
//  * "hola koders"
//  * "hola-koders"
//  * hint: https://www.w3schools.com/jsref/jsref_replace.asp
//  */

let text = 'Hola Koders'
let text2 = text.replace(" ","-")
console.log(text2)

// /**
//  * Ejercicio 4
//  * Declarar un string con un correo electrónico
//  * Enmascarar con "*" el bloque del usuario
//  * "jorgec@kodemia.mx"
//  * "*****@kodemia.mx"
//  * 
//  * hint: https://www.w3schools.com/jsref/jsref_slice_string.asp
//  * hint: https://www.w3schools.com/jsref/jsref_indexof.asp

let email = prompt('Escribe tu correo')

