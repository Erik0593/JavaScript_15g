Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  3000,
    'Pedro':  3000
}
let empleados = []
for( item in salarios){
    empleados.push(item)
}

console.log( Object.keys(salarios))


// funcion
// recibe un objeto
// retornar el total de los salarios

let total = Object.keys(salarios).reduce((acc,key) => acc += salarios[key],0)
console.log(total)

hint : reduce
hint : forEach

let salarios = {
    jorge: 3000,
    juan: 7000,
    pedro: 3000,
    Erik: 5000
}

const addarr = (salarios) => {
let sumatotal = 0

 sumatotal = Object.values((salarios).reduce((valorprevio, valoractual) => {
    
    return valorprevio += valoractual
        }, 0)
    )
}