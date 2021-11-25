const grado = parseInt(prompt('A cuantos grados estas actualmente?'))

if (!isNaN(grado)){
    console.log(`${grado} °C = ${(grado*1.8)+32} °F`)
}
else{
    console.log('No estas metiendo un numero')
}

const valuea = parseInt(prompt('Dame el primer valor'))
const valueb = parseInt(prompt('Dame el segundo valor'))
const valuec = parseInt(prompt('Dame el tercer valor'))

if(!isNaN(valuea) && !isNaN(valueb) && !isNaN(valuec)){
    if(valuea === valueb && valuea === valuec){
        console.log('Los numeros son iguales')
    } else if (valuea > valueb && valuea > valuec){
        console.log(`El numero ${valuea} es el mayor`)
    } else if (valueb > valuea && valueb > valuec){
        console.log(`El numero ${valueb} es el mayor`)
    } else{
        console.log(`El numero ${valuec} es el mayor`)
    }
} else {
    console.error('Algunos valores no son numericos')
}


const weather = prompt('¿Que tipo de clima esta en tu ciudad?')
const degree = parseInt(prompt('¿A que temperatura esta en la ciudad?'))
switch(weather){
    case "Lluvioso":
    case "lluvioso":
    if (!isNaN (degree)){
        const faren = (degree*1.8)+32
        console.log(`En tu ciudad, el clima esta "${weather}" con una temperatura de ${faren}°F`)
    }
    else{
        console.error('No estas metiendo un numero')
    }
    break
    case "Soleado":
    case "soleado":
    if (!isNaN(degree)){
        const faren = (degree*1.8)+32
        console.log(`En tu ciudad, el clima esta "${weather}" con una temperatura de ${faren}°F`)
    }
    else{
        console.error('No estas metiendo un numero')
    }
    break
    case "Nevando":
    case "nevando":
    if (!isNaN(degree)){
        const faren = (degree*1.8)+32
        console.log(`En tu ciudad, el clima esta "${weather}" con una temperatura de ${faren}°F`)
    }
    else{
        console.log('No estas metiendo un numero')
    }
    break
    case "Nublado":
    case "nublado":
    if (!isNaN(degree)){
        const faren = (degree*1.8)+32
        console.log(`En tu ciudad, el clima esta "${weather}" con una temperatura de ${faren}°F`)
    }
    else{
        console.log('No estas metiendo un numero')
    }
    break
    default:
        console.error('Clima No valido')
}