// [].reduce( (acc,value, index, array) => {}) -> ''

// const fullname = ['jorge','luis', 'camarillo', 'cristobal']

// let fullNameStr = ''
// fullNameStr = fullname.reduce( ( acc, cv) => {
//     return `${acc} ${cv.slice(0,1)}`
// })
// console.log(fullNameStr)

// const fullname = ['jorge','luis', 'camarillo', 'cristobal']
// ->'jlcc'

const getFullName = arr => {return arr.reduce((acc,cv) => `${acc}${cv.slice(0,1)}`,'')}