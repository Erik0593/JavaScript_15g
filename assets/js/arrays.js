// Metodos de objetos

// console.log(this)
// console.log(this.alert)

let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    // totalAverage: 10,
    // totalAverage: 9.4, 
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
    setAge: function (age = 10) {
        this.age = age
    }
}
// console.log(koder)

// koder.setAge()

// console.log(koder)



koder.getFullName = function () {
    console.log(this)
    return `${ this.name } ${ this.lastName }`
}


/**
 * Ejercicio
 * Asignar un nuevo metodo al objeto koder
 * que devuelva el promedio general
 * @returns Number
 * 
 * p.ej. console.log(koder.getAverage())
 * -> 9.4
 * 
 */

koder.getAverage = function () {
    let sum =  this.average.reduce((acc, cv) => acc += cv, 0)
    let total =  this.average.length
    let av = sum / total
    return av
}

koder.setAverage = function () {
    this.totalAverage = this.getAverage()
}

koder.weight = 90
koder.height = 1.73
// Agregar un metodo para calcular el IMC
koder.getIMC = function () {
    return this.weight / (this.height * this.height)
}

// console.log(koder.getIMC())

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function (score) {
    this.average.push(score)
}
// koder.setNewAve(7)
// console.log(koder.average)


// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function (nameProperties) {
    
}



//base

// let koder = {
//     name:"jorge",
//     lastName:"Camarillo",
//     average: [10, 10, 10, 8, 9],
//     age: 30,

//     getAge: function () {
//         return this.age
//     },

//     get ageKoder() {
//         return this.age
//     },

//     set ageKoder(age) {
//         this.age = age
//     },

//     get fullName() {
//         return `${ this.name } ${ this.lastName }`
//     },

//     set fullName(objFullName) {
//         this.name = objFullName[0]
//         this.lastName = objFullName[1]
//     },

//     get getaverage(){
//         return this.average
//     },

//     set getaverage(average){
//         this.average = average
//     }

// }

// // Agregar un metodo para calcular el IMC
// // koder.peso = 60
// // koder.altura = 1.7

// // koder.setGetIMC = function () {
// //     this.indicemc = this.peso/this.altura * this.altura
// // }
// // koder.setGetIMC()
// // console.log(indicemc)

// // Agregar un metodo para Agregar un nuevo promedio
// koder.setNewAve = function (element) {
//     this.average.push(element)
// }
// koder.setNewAve(10)

// koder.getAverage = function () {
//     let sum =  this.average.reduce((acc, cv) => acc += cv, 0)
//     let total =  this.average.length
//     let av = sum / total
//     return av
// }

// koder.setAverage = function () {
//     this.totalAverage = this.getAverage()
// }