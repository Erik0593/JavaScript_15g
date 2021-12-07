// // Propiedades
// // key: valor
// let carObject = {
//     modelo: 'jetta',
//     marca: 'VW',
//     color: 'rojo',
//     year: 2020,
//     tenencias: [2019, 2020, 2021]
// }

// // console.log(carObject)
// // console.log(carObject.tenencias[0])

// // Objeto de Koder
// let koder = {
//     name: 'Erik',
//     lastName: 'Gutierrez',
//     age: 28,
//     modulos: ['js', 'css'],
//     generacion: 15
// }


// // ejercicio 2
// // 1. name : jorge luis
// // 2. lastName : Camarillo
// // ... 

// // for in
// let counter = 1

// for(let propiedad in koder) {
//     console.log(`${counter}. ${propiedad} : ${koder[propiedad]}`)
//     // counter = counter + 1
//     // counter += 1     existen 3 formas aumentar el valor de un for
//     counter++
// }

//ejercicio 3
//Del siguiente objeto
//1. contar el numeor de empleados
//2. sumar total a pagar
// -> son   3 empleados y el total es 130000


// let salarios = {
//     juan: 30000,
//     albert: 50000,
//     jorge:  50000,
// }

// let sal = 0
// let empl = 0

// for(let total in salarios){
//     empl++
//     sal++
// }

// console.log(`Son ${empl} empleados y el total es ${sal}`)

//ejercicio 4

// let objOnlyString = {
//     modelo: 'jetta',
//     marca: 'VW',
//     color: 'rojo',
//     year: 2020,
//     tenencias: [2019, 2020, 2021],
//     version: 'sport',
//     origen: 'México'
// }
/*

crear un arrow function
*Recibir un objeto
*devolver un array con todas las propiedades que son un string
*Entrada: objOnlyString
Salida: -> [modelo, marca, color, version, origen]

*/

// 1. Declarar una funcion que reciba un objeto
// 2. Declarar un array vacio
// 3. iterar el objeto ( for in )
// 4. -- En cada iteracion 
// 5. ----- Obtener el valor de cada llave
// 6. ----- Verificar si es un string
// 7. ----- sí si, Agregar al array
// 8. -- fin iteracion
// 9. retornar el array


// const filterStringObjetc = (obj) => {
//     let string = []
//     for(key in obj){
//         if(typeof obj[key] === 'string'){
//             string.push(key)
//         }
//     }
//     return string
// }

// let objOnlyString = {
//     modelo: 'jetta',
//     marca: 'VW',
//     color: 'rojo',
//     year: 2020,
//     tenencias: [2019, 2020, 2021],
//     version: 'sport',
//     origen: 'México'
// }

// console.log(filterStringObjetc(objOnlyString))

// Array de objetos
// let koders =  [
//     {
//         name: 'jorge luis',
//         lastName: 'Camarillo',
//         age: 30,
//         generation: 6,
//         modulos: ['js','node js', 'cloud'],
//     },
//     {
//         name: 'Erik',
//         lastName: 'Gutierrez',
//         age: 20,
//         generation: 15,
//         modulos: ['js'],
//     },
//     {
//         name: 'Sara',
//         lastName: 'Reveles',
//         age: 24,
//         generation: 12,
//         modulos: ['js'],
//     }
// ]

// koders.forEach((element, index, array) => {
//     // console.log(element.lastName)
//     // console.log(element.age)
//     // console.log(element.generation)
//     // console.log(element.modulos)
//     // console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
// })

/**
 * 1. Hacer una funcion que reciba un objeto de koders
 * 2. Obtener la suma de todas las edades
 * 3. Retornar el total
 * hint: .forEach() .reduce()
 */

//Psuedocodigo
//1. tenemos que hacer la funcion de forEach
//2. declarar una variable vacia para el total de la suma de las edades
//3. acceder a los valores de age
//4. sumar los valores de cada objeto 
//5. retornar a la variable 
//6. console.log(variable)

let totalAge = 0

koders.forEach((element) => { return totalAge += element.age})
console.log(`La suma de las edades es ${totalAge}`)


//Solucion Briss
//funcion con foreach
//acceder el valor de la edad
// return la suma
// let suma = 0
// koders.forEach((element, index) => {
// 	console.log(element)
// 	console.log(index)
// 	//console.log(`${element.age} total de años`)
// 	return suma += element.age
// });
// console.log(suma)