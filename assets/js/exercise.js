//obetener el valor mas alto de un Array

const mostBigger = (arr) => {
    console.log(arr)
    let biggest = arr[0]
    arr.forEach( (value, index, array) => {
        if(biggest < value){
            biggest = value
        }
    })
    return biggest
}

console.log(mostBigger([1,4,3,2,5]))


//obtener el valor mas bajo de un array

//empezamos con la estrctura de un arrow
// const "nombre de la funcion" = ("Aqui va el array o valor que nosotros le demos afuera de este arrow") => {
//      
//      Aqui va todo el codigo de la arrow-function 
//
// 
//     return "valor" siempre tenemos que terminar con un valor, ya sea un numero, o un booleano
//}


const minium = (arr) => {
    console.log(arr)
    let minium = arr[0]
    arr.forEach( value => {
        if(minium > value){
            minium = value
        }
    })
    return minium
}

console.log(minium([1,3,2,5,12]))