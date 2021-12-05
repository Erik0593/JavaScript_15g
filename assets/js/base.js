// [].reduce( (acc,value, index, array) => {}) -> ''

// const fullname = ['jorge','luis', 'camarillo', 'cristobal']

// let fullNameStr = ''
// fullNameStr = fullname.reduce( ( acc, cv) => {
//     return `${acc} ${cv.slice(0,1)}`
// })
// console.log(fullNameStr)

// const fullname = ['jorge','luis', 'camarillo', 'cristobal']
// ->'jlcc'

// const getFullName = arr => {return arr.reduce((acc,cv) => `${acc}${cv.slice(0,1)}`,'')}


let additionMultiArr = (  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
let res = []
additionMultiArr.map(item => {
    res.push(item.reduce((acc,cv) => acc + cv))
})
console.log(res)

let sumaTotal = res.reduce((acc, cv) => acc+cv)

console.log(`Suma de todos los arrays: ${sumaTotal}`)