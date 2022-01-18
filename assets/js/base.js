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
    'juan': 3000,
    'Pedro': 3000,
    'Erik': 50
}


//forma de obtener las propiedades de un objeto en forma larga
let empleados = []
for (item in salarios2){
    empleados.push(item)
}
console.log(empleados)

//forma de obtener las propiedades de un objeto en forma corta
console.log(Object.keys(salarios2))

//obtener la suma total de los salarios del objeto salarios2

//solucion Arturo
let totalSuma = Object.keys(salarios2).reduce((acc,key) => acc += salarios2[key],0)
console.log(totalSuma)

//solucion forEach
const sumarSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( ( empleados ) => {
        suma += obj[empleados]
    })
    return suma
}

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
