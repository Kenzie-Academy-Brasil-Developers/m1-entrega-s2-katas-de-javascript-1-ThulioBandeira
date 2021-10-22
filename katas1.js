function oneThroughTwenty() {
  let retorno = [];
  for(let i=1; i<=20;i++){
    retorno.push(i)
  }
  return retorno;    
}
console.log(oneThroughTwenty())

function evensToTwenty() {
  let retorno = [];
  for(let i =0;i<=20;i+=2){
    retorno.push(i)
  }
  return retorno;
}

console.log(vensToTwenty())

function oddsToTwenty() {
  let retorno = [];
  for(let i=1;i<=20;i+=2){
    retorno.push(i)
  }
  return retorno;
}

console.log(oddsToTwenty())

function multiplesOfFive(a) {
  let retorno = [];
  let mult = a*5;
  for(let i=1;i<=mult;i++){
    if(i%5===0){
      retorno.push(i)
    }
  }
  return retorno;
}

console.log(multiplesOfFive(a))

function squareNumbers(num) {
  let retorno = [];
  let square =  num;
  for(let i =1;i<=square;i++){
    retorno.push(i*i)
  }
  return retorno
}

console.log(squareNumbers(num))

function countingBackwards(a,b) {
  let retorno = [];
  for(let i=a*b;i>=0;i--){
    retorno.push(i)
  }
  return retorno;
}

console.log(countingBackwards(a,b))

function evenNumbersBackwards(a,b) {
let retorno = [];
for(let i = a*b;i>=0;i--){
  if(i%2===0){
    retorno.push(i)
    }
  }
  return retorno;
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards(a,b) {
let retorno = [];
for(let i =a*b ;i>=0;i--){
  if(i%2===1){
    retorno.push(i)
  }
 }
 return retorno;
}

console.log(oddNumbersBackwards(a,b))

function multiplesOfFiveBackwards(a,b) {
let retorno = [];
for(let i=a*b;i>=1;i--){
  if(i%5===0){
    retorno.push(i)
  }
 }
 return retorno;
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards(a,b) {
let retorno = [];
for(let i =a*b;i>=1;i--){
  retorno.push(i*i)
 }
 return retorno;
}

console.log(squareNumbersBackwards(a,b))
