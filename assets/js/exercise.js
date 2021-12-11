/**
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */

 let cities = ['colima', 'colombia','Estado de mexico']

 const filterCity = () => {
     // filtrar ciudades
     let citySearch = document.querySelector('#name__city').value
     let citiesFiltered = cities.filter( (city) => {
         if(city.includes(citySearch) === true){
             return city
         }
     })
 
     // creo el layout con las ciudades filtradas
     let lista = ''
     citiesFiltered.forEach( (value) => {
         lista += `<li>${value}</li>`
     })
 
     // agrego el layout
     document.querySelector('#listCity').innerHTML = lista
 }
 
 
 
 let koders = [
     {
         name: 'emilio',
         age: 30,
         city: 'Guadalajara'
     },
     {
         name: 'Brisset',
         age: 30,
         city: 'Lima'
     }
 ]

//palabra al reves
 function reverseUser(){
    let nameOriginal = document.querySelector('#username').value
    let nameReverse = nameOriginal.split("").reverse().join("")
    document.getElementById('usernamereversed').value = nameReverse
    console.log(nameReverse)
}