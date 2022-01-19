const reverse = str => str.split("").reverse().join('')

reverse('Hello world')

const palindromo = (pal = 'Anita lava la tina') => {
    let normal = pal.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/([^\w]+|\s+)/g, '')
    let wr = normal.split('').reverse().join('')
    return normal == wr ? true : false
    
}

// const array1 = [1,2,3,4]
// const array2 = [1,2]
// const array3 = array1.concat(array2)
//     console.log(array3)

//     let total = 0
//     array3.forEach(function(i){total += i})
//     console.log(total)

const arrayReduce = (arrOne, arrTwo) => {
    let newArr = arrOne.concat(arrTwo)
    let arrAdd = 0
    newArr.forEach( (item ) => {
        arrAdd += item
    })
    return arrAdd
}


//cual es el numero mas grande de un array
// arr [1,4,2,3,5]

const mostBigger = (arr) => {
    let biggest = arr[0]
    arr.forEach((item) => {
        if(biggest < item){
            biggest = item
        }
    })
    return biggest
}
// console.log(mostBigger([1,4,30,2,5,10,20]))

const mostLower = (arr) => {
    let lowerest = arr[0]
    arr.forEach((item) => {
        if(lowerest > item){
            lowerest = item
        }
    })
    return lowerest
}
// console.log(mostLower([4,30,2,5,10,20]))

let resultado = 
[11,2,3,10,5].map( (val) => {
    let newVal = val * 2 
    return newVal
})
// console.log(resultado)

const arrMap = [11,2,3,10,5]
const result = arrMap.map( (val) => {
    return val.toString()
})
console.log(result)

const capitalizer = (arr) => {
    let arrCapitalized = []

    arrCapitalized = arr.map(element => {
        if(typeof  element === 'string'){
            return `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
        }else {
            return element
        }
    })
    return arrCapitalized
}


let resultCap = capitalizer(['hOLA','mundo',123])
console.log(resultCap)

const arrayCitys = ['ciudad','CDMX','Monterrey','guadalajara']

let resultFilter = arrayCitys.filter( (cv,index,arr) => {
    console.log(cv)
    if(cv.slice(0,1).toLowerCase() === 'c'){
        return cv
    }
})
console.log(resultFilter)

//un arreglo con nombres de personas, devulve un arreglo con los nombres de las personas que empiecen con vocales
//onlyNamesVowels(['jorge','ana','ivan','sergio','luis','oscar')
// -> ['Ana','Ivan','Oscar']

const arrNames = ['jorge','ana','ivan','sergio','luis','oscar']

const onlyNamesVowels = (arrNames) => {
    return arrNames.filter(item => typeof item === 'string')
    .map(item => item.toUpperCase().slice(0,1) + item.slice(1).toLowerCase())
    .filter(item => item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U')

}

let koder = {
    generacion: '15g',
    edad: 28,
    ciudad: 'CDMX',
    name: 'erik',
    apellidoPaterno: 'Gutierrez',
    hobbie: ['musica','juegos','series'],
}

console.log(koder)

//create
koder.isMentor = false

//read
console.log(koder.isMentor)
console.log(koder.name)
// console.log(koder.name.toUpperCase())

//Update
koder.name = koder.name.toUpperCase()
console.log(koder.name)
koder.edad = 30
koder.hobbie.push('kodemia') 
console.log(koder)

//Delete
delete koder.ciudad
console.log(koder)


//imprime cada una de las propiedades con sus valores
for(let key in koder) {
    console.log(key, koder[key])
    if(key === 'hobbie'){
        console.log(koder[key][3])
    }
}

let counter = 1
for(let key in koder){
    console.log(`${counter}. ${key} : ${koder[key]}`)
    counter++
}


//del siguiente objeto 
//1. contar cuantos empleados son 
//2. sumar el total a pagar
// -> son 3 empleados y el total es 13000

let salarios = {
    'juan': 30000,
    'albert': 50000,
    'jorge': 50000
}

let total = 0
let employes = 0

for(valor in salarios){
    total += salarios[valor]
    employes++
}

console.log(`Son ${employes} empleados y el total es ${total}`)

let objOnlyString = {
    modelo: 'jetta',
    marca: 'VW',
    color: 'rojo',
    year: 2020,
    tenencias: [2019,2020,2021],
    version: 'sport',
    origen: 'México'
}

//Arrow Function crear una
//recibir un objeto
//Devolver un array con todas las propiedades que osnun string
//entrada: ObjOnlyString
//[modelo,marca,color,version,origen]

const filterStringObject = (obj) => {
    let result = []
    for(valor in obj) {
        if(typeof obj[valor] === 'string'){
            result.push(valor)
        }
    }
    return result
}

console.log(filterStringObject(objOnlyString))



//array de objetos
let koders = [
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 28,
        generation: 15,
        modulos: ['js', 'node js', 'cloud']
    },
    {
        name: 'Viridiana',
        lastName: 'Austria',
        age: 30,
        generation: 18,
        modulos: ['js','cloud']
    },
    {
        name: 'Berenice',
        lastName: 'Gutierrez',
        age: 31,
        generation: 15,
        modulos: ['js', 'node js', 'cloud']
    }
]

koders.forEach((element) => {
    // console.log(element.name)
    // console.log(element.lastName)
    // console.log(element.age)
    console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)
})

//del objeto koders hacer una funcion que reciba un objeto de koders
//1. sumar todas las edades
//2.retornar el total

//metodo forEach
const totalAge = (arr) => {
    let total = 0
    arr.forEach(element => {
        total += element.age
    })
    return total
}
console.log(totalAge(koders))

//metodo Reduce
//version corta
const countAge = (arr) => arr.reduce((acc,val) => acc + val.age,0)
console.log(countAge(koders))

//version larga
const getTotalAge = (obj) => {
    let AgeTotal = 0
    AgeTotal = obj.reduce( (acumulador, valorActural) =>{
        acumulador += valorActural.age
        return acumulador
    },0)
    return AgeTotal
}
console.log(getTotalAge(koders))


//tarea de la clase 10
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

//Ejercicio 1
const joinUsers = (arr) => {
    return arr.reduce( (acc, user) => {
        let userName = user.firstName + ' ' + user.lastName
        acc[userName] = user.role
        return acc
    }, {})
}

console.log(joinUsers(users))


//Ejercicio 2
const filterUserByRole = (arr,role) => arr.filter(users => users.role === role)

console.log(filterUserByRole(users,'Instructor'))



// Ejercicio 3
// tomando el siguiente array de objetos
// filtrar lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]


const personVoted = (arrPersons) => {
    return arrPersons.reduce( (acc,person) => {
        return person.voted == true ? acc +1: acc
    }, 0)
}

console.log(personVoted(persons))


//Forma Larga
// const averageAgeVoters = (arr) => {
//     let totalAge = 0
//     totalAge = arr.reduce( (acc,person) => {
//         return acc + person.age
//     }, 0)
//     let totalPersons = arr.length
//     let promedio = totalAge / totalPersons
//     console.log(promedio)
// }

//Forma Corta
const averageAgeVoters = (arr) =>  arr.reduce( (acc,person) => acc + person.age, 0) / arr.length 

console.log(averageAgeVoters(persons))

// ejemplo de metodos en objetos

let salarios2 = {
    'jorge': 3000,
    'juan': 5000,
    'Pedro': 3000,
    'Erik': 50
}


//forma de obtener las propiedades de un objeto en forma larga
//metodo "for-in"
let empleados = []
for (item in salarios2){
    empleados.push(item)
}
console.log(empleados)

//forma de obtener las propiedades de un objeto en forma corta
console.log(Object.keys(salarios2))

//obtener la suma total de los salarios del objeto salarios2

//solucion Arturo
let totalSuma = Object.keys(salarios2).reduce((acc,NumeroSalario) => acc += salarios2[NumeroSalario],0)
console.log(totalSuma)

//solucion forEach
const sumarSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( ( empleados ) => {
        suma += obj[empleados]
    })
    return suma
}

//Object.keys accedemos a las propiedades del objeto 
//obj[empleados(o el nombre que queramos)] obtenemos el valor de la propiedad

console.log(sumarSalarios(salarios2))

//solucion reduce

const sumarSalariosRed = (obj) => {
    let suma = 0
    suma = Object.keys(obj).reduce( (acc,key) => {
        return acc + obj[key]
    },0)
    return suma
}

console.log(sumarSalariosRed(salarios2))

//para obtener los valores de una propiedad 
// Object.value()

console.log(Object.values(salarios2))


//obtener la suma de los valores solo conreduce

//declaramos la arrowFunction
const SalariosReduce = (Redarr) => {
    //declaramos una variale vacia para guardar el valor total
    let sumRed = 0
    //retornamos ese valor y lo igualamos a lo que queremos hacer
    sumRed = Object.values(Redarr).reduce( (acc,value) => {
        //obtenemos el valor de la propiedad desde "Object.value(Redarr es el objeto que vamos a ingresar desde la funcion)"
        //y le aplicamos el metodo Reduce (el acc es el primer valor que recibe, en este caso empieza de 0)
        // el valor value es el valor de la propiedad, en este caso es el salario de cada uno de los empleados
        return acc += value
        //en este return acc += value vamos a estar sumando todos los salarios de cada uno
        // empezando por (acc)0 + (value)3000 de jorge, para despues en la siguiente iteracion seria esto
        // (acc)3000 + (value)5000 de juan y asi sucesivamente para sumar todos los valores hasta llegar al resultado final
    },0 )
    //despues de la llave, tenemos que poner una "," para indicar en que valor va a empezar el metodo reduce
    return sumRed
    //aqui retornamos el valor que obtenemos de todo lo anterior
}

console.log(SalariosReduce(salarios2))


//el tercer metodo de objetos es Object.assing()
//el cual concatena dos objetos o mas, en este caso 
//concatenaremos dosobjetos obj1 y obj2 
let obj1 = {
    name: 'Erik'
}

let obj2 = {
    lastName: 'Gutierrez'
}

console.log(obj1)
//el metodo Object.assing(target, ...sources)
//obtiene las propiedades de un objeto y las concatena con el priemr objeto que ponemos (target)
Object.assign(obj1,obj2)
//en este caso quedaria de la siguiente manera

// let obj1 = {
//     name: 'Erik',
//     lastName: 'Gutierrez'
// }

console.log(obj1)


//el metodo de objetos = Object.entries(objeto)
//nos arroja un array de arrays
//queda de esta forma

// [
//     ['name','Erik'],
//     ['lastName','Gutierrez']
// ]

console.log(Object.entries(obj1))


//como lo dice el metodo, se puede utilizar cuando ya no vas a permitir algun cambio en el 
//antes del metodo podmos hacer lo que queramos con el objeto

//agregamos el valor de generation 
obj1.generation = 15
console.log(obj1)

//congalamos o bloqueamos el objeto 
Object.freeze(obj1)

//tratamos de modificar el valor de generation y lo imprimimos en consola
obj1.generation = 20
console.log(obj1)

//en consola sigue apareciendo 15



//otro tema
//Destructuracion de arrays
//tenemos un array 
let newArray = [10,20,30,40,50]

//estamos asignando un valor a cada letra
//para luego hacer otras cosas con las variables

// let [a,b,c,d] = newArray
// console.log(a,b,c,d)

let [a,b, ...rest] = [10,20,30,40,50]
//podemos imprimir por separado y el resto de un array
console.log(a)
console.log(b)
//siempre se debe de poner los tres puntos antes
console.log(...rest)


//destructuracion de objetos

const hero = {
    NameHero: 'Batman',
    RealName: 'Bruce Wayne'
}

const { NameHero, RealName } = hero

console.log(NameHero)
console.log(RealName)

//otro ejemplo de la destructuracion de objetos es este


let users_2 = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

//podemos aplicar el metodo forEach para imprimir todos los objetos en un solo valor

//hacemos la funcion normal
users_2.forEach((value,index,array)=>{
    //se puede imprimir todo de la siguiente manera
    //console.log(value.firstName, value.lastName, value.role)
    //pero de otra forma mas elegante es la siguiente

//iniciamos una variable de objeto y lo igualamos a value
    let {firstName, lastName, role} = value
    console.log(firstName,lastName,role)
    //no aparecera de la siguiente manera
    //todo en texto

    //  Bradley Bouley Full Stack Resident
    //  Chloe Alnaji Full Stack Resident
    //  Jonathan Baughn Enterprise Instructor
    //  Michael Herman Lead Instructor
    //  Robert Hajek Full Stack Resident
    //  Wes Reid Instructor
    //  Zach Klabunde Instructor
})

//un metodo de array Spread operator

//tenemos dos arrays 
const arr1 = ['one','two']
const arr2 = ['three',...arr1,'four','five']

//el spread aperator es concatenar un array con otro array
//una forma de hacerlo es la siguiente

// let arr3 = arr2.concat(arr1)
// console.log(arr3)
//['three', 'four', 'five', 'one', 'two']

//la otra forma de hacerlo con spread operator es la siguiente

// const arr1 = ['one','two']
// const arr2 = ['three','four','five', ...arr1]

//y nos da el mismo resultado
//['three', 'four', 'five', 'one', 'two']

//la ventaja del spread operator es que lo podemos poner donde uno quiera

// const arr1 = ['one','two']
// const arr2 = ['three',...arr1,'four','five']
console.log(arr2)

//y nos da esta resultado
// ['three', 'one', 'two', 'four', 'five']

//tambien se puede hacer con objetos

// let objSpread = {
//     propiedad: 'valor'
// }
// let objSpread2 = {
//     propiedad2: 'valor'
// }

//es la misma situacion que un array solo ay que agregar lo que quermos en donde lo queramos 
//en este caso queremos meter la propiedad y el valor del primer objeto en el segundo objeto

let objSpread = {
    propiedad: 'valor',
    age: 29
}
let objSpread2 = {
    propiedad2: 'valor',
    ...objSpread
}

console.log(objSpread2)

//tarea de la clase 11
/**
 * Ejercicio 1.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

 let koder_home = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}

const changeObj = (obj) => {
    
    obj.languages.push('Go')
    obj.level = 4
    delete obj.avatar
    obj.age = 30
    // console.log(`${obj.languages}`)

    return obj
}

//copiamos el objeto y si modificamos algo, no alteramos el original
let newObj = {...koder_home}


console.log(changeObj(koder_home))
console.log(newObj)


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


//hacemos una funcion para saber si es un array o un objeto
const isAnObjOrArr = (element) => {
    //verificamos primero si es un array con un metodo de array si es un array (isArray)
    //y lo comparamos para ver si el elemento que ingreso es un array, si es true, imprimira que es un array
    if(Array.isArray(element) === true){
        console.log('Es un Array')
        //si no es un array, hace la comparacion de si es un objeto
        //si es true, imprimira 'Es un objeto'
    }else if(typeof (element) === 'object'){
        console.log('Es un Objeto')
    }else{
        //Si no es ninguno de los dos anteriores.
        //Solo imprimira 'No es un array ni un objeto'
        console.log('No es un array ni un objeto')
    }
    //retorna el valor para poderlo imprimir en consola
    return element
}

