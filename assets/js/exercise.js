// Función 1:
// valor por defecto 10
// Imprimir en consola las tablas de multiplicar del 1 al 10 

function printMultiTables( tableLimit = 10) {
    for(i=0; i<= tableLimit; i++){
        for(j=0; j<= 10; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}



// Función 2:
// valor por defecto 10
// Imprimir en consola la suma de 1 a N, siendo N un numero entre 1 y 100

function addNumbersRange(numberEnd = 10) {
    let addRange = 0
    if(!isNaN(parseInt(numberEnd)) || numberEnd >= 1 && numberEnd <= 100){
        for(i = 1; i <= numberEnd; i++){
            addRange += i
        }
    } else {
        console.log('No es un número valido')
    }

    return addRange
}


// Función 3:
// valor por defecto "1234"
// Imprimir en consola la suma total de todos los digitos de una cantidad 
// p.ej. "1234" -> 10


function sumatotal (valor = 1234) {
    let anterior = valor.toString()
    let nuevo = 0
    for(i = 0; i < anterior.length; i++){
        nuevo += parseInt(anterior[i])
    }
  
    return nuevo
  }

// Función 4:
// valor por defecto 3 y 5, sino el que ponga el usuario 
// Imprimir en consola la suma de los múltiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

const multiplo = (a=3, b=5) =>{
    let mult = 0
    for(i=1; i<=100;i++){
        if(i % a === 0 || i % b === 0){
            mult += i
        }
    }
    return(`La suma de los multiplos es = ${mult}`)
}