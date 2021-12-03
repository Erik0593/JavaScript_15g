

// const capitalizewithmap = arr => {
//     return arr.map (element => {
//         if(typeof element === 'string') {
//             let upper = `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
//             return upper
//         } else {
//             return element
//         }
//     })
// }

// let resultCap = capitalizewithmap(['hOla', 'munDo'])


// let arrayNumbers = [1,2,3,4,5,6]
// let arrayAllenar = []
// arrayAllenar = arrayNumbers.map((numero, indice, arrOrig) => {
//     return numero % 2
// })

// console.log(arrayAllenar)


// let arrToFilter = [1,2,3,4,5,6,7]
// let newarray = []

// newarray = arrToFilter.filter( (numero)  => {
//     if(numero % 2 === 0){
//         return numero
//     }
// })

// console.log(newarray)

// -> ['hola','mundo',0,5]
// -> ['hola','mundo']
//1. función
//2. filtrar solo los que son de tipy string

let array = ['hola','mundo',0,5,'otro','viri']
let filterarray = []

filterarray = array.filter( Element => {
    if(typeof Element === 'string'){
        return Element
    }
})

console.log(filterarray)


