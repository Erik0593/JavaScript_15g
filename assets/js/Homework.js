//['hOla', 'munDo']
// -> ['Hola', 'Mundo']

const capitalizewithmap = arr => {
    let capitalize = []
    capitalize = arr.map( element => {
        if(typeof element === 'string') {
            let stringCap = `${element.slice(0,1).toUpperCase()}${element.slice(1).toLowerCase()}`
            return stringCap
        } else {
            return element
        }
    }) 
}