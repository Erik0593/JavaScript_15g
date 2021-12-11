// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 * 
 */

let ulElement = document.createElement('ul')
    ulElement.setAttribute('id','menu')
    ulElement.setAttribute('data-menu','booking')
   
   
let liFirst = document.createElement('li')
    liFirst.textContent = 'Hoteles'
    ulElement.appendChild(liFirst).setAttribute('class','menu__booking__item')
let liSecond = document.createElement('li')
    liSecond.textContent = 'Ofertas'
    ulElement.appendChild(liSecond).setAttribute('class','menu__booking__item')
let liThird = document.createElement('li')     
    liThird.textContent = 'Viajes'
    ulElement.appendChild(liThird).setAttribute('class','menu__booking__item')
let liFourth = document.createElement('li')
    liFourth.textContent = 'Ayuda'
    ulElement.appendChild(liFourth).setAttribute('class','menu__booking__item')
let liFifth = document.createElement('li')     
    liFifth.textContent = 'Cancelaciones'
    ulElement.appendChild(liFifth).setAttribute('class','menu__booking__item') 
   
   
   document.getElementsByTagName('body')[0].appendChild(ulElement)





/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 * 
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 * 
 */

 let objPromesas = [
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png',
        titulo: 'LA MAYOR COBERTURA',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png',
        titulo: 'DESAYUNO EN CORTESÍA*',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png',
        titulo: 'CANCELACIÓN SIN COSTO**',
    },
    {
        imagen: 'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png',
        titulo: 'WIFI EN CORTESÍA',
    }
]

/**
 *  Tarea 2
 * Estudiar lo siguiente:
 * 1. innerHTML
 * 2. insertBefore()
 * 3. insertAfter()
 * 4. append()
 * 5. prepend()
 * 6. removeChild()
 * 7. DOM events
 * 
 */