// .addEventListener('type', listener, options)
// callback JS

const saludo = () => {
    console.log('saludo event listener')
} 

let buttonEvent = document.getElementById('button__eventListener')

// add event
buttonEvent.addEventListener('click', saludo)
// buttonEvent.addEventListener('click', () => {
//     console.log('saludo event listener')
// })

// other event
document.getElementById('button__eventListener').addEventListener('focus', () => {
    console.log('saludo event listener focus')
})

// remove event
buttonEvent.removeEventListener('click',saludo)
