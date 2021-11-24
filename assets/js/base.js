const number = parseInt(prompt('Introduce el primer valor'))
const number2 = parseInt(prompt('Introduce el segundo valor'))


if (number == number2){
    console.log(number*number2)
}
else if(number > number2){
    console.log(number/number2)
}else{
    console.log(number+number2)
}