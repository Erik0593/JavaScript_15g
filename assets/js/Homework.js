/**
 * 
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

 const number = parseInt(prompt('Introduce un valor del 1 al 100'))
 const valor = (number%2) ? "impar" : "par"
 console.log(valor)


/**
 * 
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

let day = prompt('Introduce el dia')
switch(day){
    case 'domingo':
        console.log('Dia de la semana 1')
        break
    case 'lunes':
        console.log('Dia de la semana 2')
        break
    case 'martes':
        console.log('Dia de la semana 3')
        break
    case 'miercoles':
        console.log('Dia de la semana 4')
        break
    case 'jueves':
        console.log('Dia de la semana 5')
        break
    case 'viernes':
        console.log('Dia de la semana 6')
        break
    case 'sabado':
        console.log('Dia de la semana 7')
        break
    default:
        console.error('No has escrito ningun dia')
        break
}


/**
 * 
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

 const number2 = parseInt(prompt('Introduce el primer valor'))
 const number3 = parseInt(prompt('Introduce el segundo valor'))

 if(number2 > number3){
    console.log('El numero mayor es: ',number2) 
    console.log('El numero menor es: ', number3)
 } else {
    console.log('El numero mayor es: ',number3) 
    console.log('El numero menor es: ', number2)
 }