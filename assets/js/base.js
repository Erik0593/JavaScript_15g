/* let saludo = 'hola'

for(i = 0; i < saludo.length; i++){
    console.log(saludo[i])
}



//pedir al usuario un string
//contar las vocales y las consonantes
//imprimir en consola
//2 vocales y 2 consonantes

const userWord = prompt('Dame una palabra')
 let vowels = 0
 let consonant = 0

 if(userWord.length > 0){
    
     for(i = 0; i < userWord.length; i++ ) {
         let letter = userWord[i].toLowerCase()
         if(letter !== ' '){
             if(
                 letter === 'a' ||
                 letter === 'e' ||
                 letter === 'i' ||
                 letter === 'o' ||
                 letter === 'u' ||
                 letter === 'á' ||
                 letter === 'é' ||
                 letter === 'í' ||
                 letter === 'ó' ||
                 letter === 'ú'
             ) {
                 //vowels = vowels + 1
                 //vowels += 1
                 vowels++
             } else {
                 consonant++
             }
         }
     }
    
     console.log(`${vowels} vocales y ${consonant} consonantes`)
 } else {
     console.log('Inserta una palabra por favor')
 }

*/

//pedir una palabra con espacio al inficio y al final 
//contar las letras "a" y "e",
//contar numero de espacios, sin contar los espacios
//al inicio y al final
/*
let word = prompt('Dame una texto').trim().toLowerCase()
let lettera, lettere, space = 0

for(i=0; i<=word.length; i++){
    if(word[i] == "a"){
        lettera++
    } else if(word[i] == "e"){
        lettere++
    }else if(word[i] == " "){
        space++
    }
}
console.log(`El numero de letra "a" es ${lettera} y el numero de letra "e" es ${lettere}, los espacios que tiene dentro del texto es ${space}`)
*/

//pedir al usuario 1 numero entre 1 y 100
//sumar todos los numeros entre el 1 y este nuemro
//mandar un alert con el total

/*
let number = parseInt(prompt('Dame un numero del 1 al 100'))
let result = 0

for(i=1; i<=number; i++){
    console.log(`La suma es: ${i + number}`)
}
*/


// pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo

// For solution
const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

let wordWithoutSpace = ''
let wordReversed = ''

if(wordUser != ''){
    // Remove White space
    for(i = 0; i < wordUser.length; i++){
        if(wordUser[i] !== ' '){
            wordWithoutSpace = wordWithoutSpace +  wordUser[i]
        }
    }
    console.log(wordWithoutSpace)

    // word reversed  
    for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
        wordReversed = wordReversed + wordWithoutSpace[j]
    } 
    console.log(wordReversed)

    wordWithoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}

//while solution 

