//#1
let numbers = [1,2,3,4,5,6]
function sum(numbers){
    [one, two, ...rest] = numbers
    return [one+two , rest.reduce((a,b)=> a*b,1)]
}
console.log(sum(numbers))
//#2
const user = {
    banks: [
      {},
      {},
      {
        address: {
          city: 'New York'
        }
      }
    ]
  };
function desrtucting(user){
    const {banks: [,,{address:{city}={}}] = []} = user
    return city
}
console.log(desrtucting(user)); 
//#3
let originObject = {
    name: 'John',
    age: 30,
    city: 'New York',
    adress: {
        street: '123 Street',
    }
}
function copyObject(originObject){
    let newObject = {...originObject}
        return newObject
}
console.log(copyObject(originObject))