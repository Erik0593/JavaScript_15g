/**
 * Ejercicio 1.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4  listo
 * 3. Eliminar la propiedad avatar   listo
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30  listo
 * 5. Imprimir en consola todos los lenguajes dominados  listo
 * 6. Clonar el objeto en uno nuevo   listo
 * 7. Imprimir en consola el nuevo objeto   listo
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

 let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}


//agregar el valor de 'Go' dentro del array Languages 
console.log(koder)
koder.languages.push("Go")
console.log(koder)

//cambiar el nivel a 4
koder.level = 4 

//borrar la llave avatar
delete koder.avatar


//agregar la llave age con el valor de 30
let koderage = {
    age: 30
}

Object.assign(koder,koderage)
console.log(koder)

//imprimir solo los lenguajes 
console.log(koder.languages)

//clonar un objeto 
const koderclon = Object.assign({}, koder)

//imprimir el nuevo objeto
console.log(koderclon)


/**
 * Ejercicio 2:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

 const isAnObjectOrArray = (element) => {
    if(Array.isArray(element)){
        return 'Es un array'
    }else if(typeof element === 'object'){
        return 'Es un objeto'
    }else{
        return 'No es un array ni un objeto'
    }
}

/**
 * Ejercicio 3.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * Resultado esperado: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * 
 * @params {Object} object - El objeto que queremos transformar
 * @return [Array] - El array que se espera retornar
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 1 con Object.entries() y otra con .map()
 */


//solucion Object.entries()
const makePairs = (object) => {
    let arr = Object.entries(object)
    return arr
}

//Solucion .map
const makePairs = (object) => {

}


/**
 * Ejercicio 4:
 * Realizar una funcion que tome como parametro un string
 * y retorne un array con todos caracteres del string
 * 
 * Resultado esperado: 
 * ·> splitString('hola mundo')
 * ·> ['h','o','l','a',' ','m','u','n','d','o']
 * 
 * @params 'String' - El String que queremos transformar
 * @return [Array] - El array que se espera retornar
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

const splitString = (str) => {

}