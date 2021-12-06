 const filterStrings  = (arr) => {
        return arr.filter(item => typeof item === 'string')
        .map( item => {                                                                  
            return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()
        })
        .filter( item => {
            return item.length > 5
        })
        .filter( item => {
            return item.split('a').length >= 3
        })
    }
    console.log(filterStrings(['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] ))

    // const filterStrings  = (arr) => {
//     return arr.filter( item => typeof item === 'string')
//     .map( item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
//     .filter( item => item.length > 5)
//     .filter( item => item.split('a').length >= 3)
// }
// console.log(filterStrings(['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] ))