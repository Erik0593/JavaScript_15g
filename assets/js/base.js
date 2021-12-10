/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */

//  1. Selecionar por ID
document.getElementById('head__title') 
document.getElementsByTagName('li')
document.getElementsByClassName('link__menu')

document.querySelector('#head__title')
document.querySelector('li')
document.querySelector('.link__menu')
document.querySelectorAll('.link__menu')
// document.querySelectorAll('')

/**
 * Obtener atributos
 * Setear atributos
 */

// get
// let title = document.querySelector('#head__title').getAttribute('data-title')
// let level = document.querySelector('#head__title').getAttribute('data-level')

// // set
// document.querySelector('#head__title').setAttribute('data-custom','random')
// // reemplazando clases 
// document.querySelector('#head__title').setAttribute('class','trees cuatro')

// // Agregar clases
// document.querySelector('#head__title').classList.add('clase3')
// // remover clases
// document.querySelector('#head__title').classList.remove('clase2')

// // comprobar si existe un atributo
// document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */

document.querySelector('#head__title').getAttribute('class')
let result = document.querySelector('#head__title').hasAttribute('clase1 clase2')


if(result === true){
    document.querySelector('#head__title').classList.add('clase3')
}else {
    document.querySelector('#head__title').classList.add('costum')
}


//solucion mentor
// let elemenTitle = document.querySelector('#head__title')
// if( elemenTitle.hasAttribute('class') ) {
//     if( elemenTitle.getAttribute('class') === 'clase1 clase2' ) {
//         elemenTitle.classList.add('clase3')
//     } else {
//         elemenTitle.classList.add('custom')
//     }
// }


// createElement('tag')
// textContent
// appendChild

// let ulElement = document.createElement('ul')
// // <ul></ul>

// let liFirst = document.createElement('li')
// // <li></li>
// liFirst.textContent = 'item 1'
// // <li>item 1</li>
// ulElement.appendChild(liFirst)
// // <ul> <li>item 1</li> </ul>

// let liSecond = document.createElement('li')
// // <li></li>
// liSecond.textContent = 'item 2'
// // <li>item 2</li>
// ulElement.appendChild(liSecond)
// // <ul> <li>item 1</li> <li>item 2</li> </ul>

// document.getElementsByTagName('body')[0].appendChild(ulElement)
// // body -> <ul> <li>item 1</li> <li>item 2</li> </ul>


//ejercicio 2
// <!-- <ul id="menu" class="menu">
//         <li class="item__menu">Home</li>
//         <li class="item__menu">Products</li>
//         <li class="item__menu">About Us</li>
//     </ul> -->

let ulElement = document.createElement('ul')
ulElement.setAttribute('id','menu')
ulElement.setAttribute('class','menu')

let liFirst = document.createElement('li')
        liFirst.textContent = 'Home'
        ulElement.appendChild(liFirst).setAttribute('class','item__menu')
let liSecond = document.createElement('li')
        liSecond.textContent = 'Products'
        ulElement.appendChild(liSecond).setAttribute('class','item__menu')
let liThird = document.createElement('li')     
        liThird.textContent = 'About Us'
        ulElement.appendChild(liThird).setAttribute('class','item__menu')  

document.getElementsByTagName('body')[0].appendChild(ulElement)



// data attributes
// propiedades personalizadas



/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */