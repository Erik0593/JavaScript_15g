/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/
/*
primero tenemos que revisar que el array sean solo puros strings
despues tenemos que comprobar que la primera letra del sting sea una vocal
despues tenemos que capitalizar solo la primera letra del string
*/

const onlyNamesVowels = arr => {
    let name = []
    return arr.foreach(item => typeof item === 'string')
    
}

/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */