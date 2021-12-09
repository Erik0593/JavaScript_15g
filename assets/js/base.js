// console.log(this)
// console.log(this.alert)

let koder = {
    name:"jorge",
    lastName:"Camarillo",
    age: 30,
    average: [10, 10, 10, 8, 9],
    peso: 60,
    altura: 1.70,
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
}

koder.getFullName = function () {
    // console.log(this)
    return `${ this.name } ${ this.lastName } ${this.age}`
}

// console.log(koder.getFullName())

koder.getAverage = function () {
    // let sumatotal = 0
    // let promedio = 0
    // this.average.forEach(element => {
    //     sumatotal += element
    //     promedio = sumatotal/this.average.length
    // })
    // console.log(promedio)
    let sum = this.average.reduce((acc,cv ) => acc += cv, 0)
    let total = this.average.length
    let av = sum / total
    return av
}

koder.setAverage = function() {
    this.totalAvarage = this.getAverage 
}
koder.setAverage()
console.log(koder)

// Agregar un metodo para calcular el IMC
koder.peso = 60
koder.altura = 1.7

koder.setGetIMC = function () {
    this.indicemc = this.peso/this.altura * this.altura
}
koder.setGetIMC()
console.log(indicemc)

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function (element) {
    this.average.push(element)
}
koder.setNewAve(10)

// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function () {
    
}