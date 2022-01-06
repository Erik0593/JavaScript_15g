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