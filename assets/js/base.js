const multiplo = (a=3, b=5) =>{
  let mult = 0
  for(i=1; i<=100;i++){
      if(i % a === 0 || i % b === 0){
          mult += i
      }
  }
  return(`La suma de los multiplos es = ${mult}`)
}