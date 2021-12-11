// let cities = ['colima', 'colombia','Estado de mexico']

// const filterCity = () => {
//     // filtrar ciudades
//     let citySearch = document.querySelector('#name__city').value
//     let citiesFiltered = cities.filter( (city) => {
//         if(city.includes(citySearch) === true){
//             return city
//         }
//     })

//     // creo el layout con las ciudades filtradas
//     let lista = ''
//     citiesFiltered.forEach( (value) => {
//         lista += `<li>${value}</li>`
//     })

//     // agrego el layout
//     document.querySelector('#listCity').innerHTML = lista
// }



// {/* <input type="text" id="name__koder" placeholder="Coloca un nombre" onkeyup="filterKoder()">
//     <ul id="listKoders">
//         <li>
//             <strong>Brisset</strong>
//             <span>30 Años</span>
//             <span>Lima</span>
//         </li>
//     </ul> */}

let koders = [
    {
        name: 'emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Brisset',
        age: 29,
        city: 'Lima'
    },
    {
        name: 'ivonne',
        age: 28,
        city: 'Guadalajara'
    },
    {
        name: 'jorge',
        age: 27,
        city: 'Lima'
    },
    {
        name: 'erik',
        age: 26,
        city: 'Lima'
    }
]

const filterKoder = () => {
        // filtrar koders    
    let koderSearch = document.querySelector('#name__koder').value
    let koderFiltered = koders.filter( (koder) => {
        if(koders.includes(koderSearch)){
            return koder
        }
    })
}
