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

    let menuContainer = document.createElement('ul')    
    menuContainer.classList.add('menu__booking')
    menuContainer.setAttribute('id','menu__booking')
    document.getElementsByTagName('body')[0].appendChild(menuContainer)
    
        
    let arrMenu = ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
    let markupMenu = ''
    arrMenu.forEach( (menu) => {
        // menuContainer.innerHTML = `<li class="menu__booking__item">${menu}</li>`
        markupMenu += `<li class="menu__booking__item">${menu}</li>`
    })
    
    document.querySelector('#menu__booking').innerHTML = markupMenu
    
        
        
        
        
        
        
        
        
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
        
        // let container = document.createElement('section')
        // container.classList.add('grid__services')
        
        // objPromesas.forEach( (service) => {
        //     let divService = document.createElement('div')
        //     divService.classList.add('grid__services__item')
        
        //     let imgService = document.createElement('img')
        //     imgService.setAttribute('src',service.imagen)
        
        //     let titleService = document.createElement('h3')
        //     titleService.textContent = service.titulo
        
        //     divService.appendChild(imgService)
        //     divService.appendChild(titleService)
        //     container.appendChild(divService)
        // })
        
        // document.getElementsByTagName('body')[0].appendChild(container)
        
        
        
        
        
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
    
    // insertBefore
    let menu = document.getElementById('menuInsertBefore')
    // create a new li node
    let liElement = document.createElement('li')
    liElement.textContent = 'menu insertado '
    // <li>menu insertado</li>
    // insert a new node before the first list item
    // menu.insertBefore(liElement, menu.childNodes[0] )
    // menu.insertAfter( liElement, menu.childNodes[0] )
    
    
    // append
    // insertBefore
    // let menu = document.getElementById('menuInsertBefore')
    // create a new li node
    let liElementAppend = document.createElement('li')
    liElementAppend.textContent = 'menu insertado append'
    menu.append(liElementAppend)
    
    
    let liElementPrepend = document.createElement('li')
    liElementPrepend.textContent = 'menu insertado prepend'
    
    menu.prepend(liElementPrepend)
    
    // console.log(liElementPrepend)
    
    menu.removeChild(liElementPrepend)
    
    
    
    const reverseUser = () =>  {
        let username = document.querySelector('#username').value
        let reversedUserName = username.split('').reverse().join('')
        document.querySelector('#usernamereversed').value = reversedUserName
    }
    
    const focusInInput = () => {
        console.log('Focusin event input')
    }
    const focusOutInput = () => {
        console.log('Focusout event input')
    }