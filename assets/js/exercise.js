//Ejercicios en equipo
// Función 1:
// Imprimir en consola las tablas de multiplicar del 1 al 10 


// Función 2:
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

function sumaTotal(){
    let n = parseInt(prompt('Dame un valor del 1 al 100'))
    let j = 0
    for (i=0; i<=n; i++){
        j += i
        console.log(i)
    }
}

// Función 3:
// Imprimir en consola si una oración es un palindromo (puede contener espacios)
// anita lava la tina -> True


function palindromo(){
const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

let wordWithoutSpace = ''
let wordReversed = ''

if(wordUser != ''){
    for(i = 0; i < wordUser.length; i++){
        if(wordUser[i] !== ' '){
            wordWithoutSpace = wordWithoutSpace +  wordUser[i]
        }
    }

    for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
        wordReversed = wordReversed + wordWithoutSpace[j]
    } 

    wordWithoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}
}




// Función 4:
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10


// Función 5:
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168
