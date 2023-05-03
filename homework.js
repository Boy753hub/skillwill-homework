//#1

let a = 5
let b = 5

function Boolean(a, b){
     console.log(a==b)
}
Boolean(a, b)

//#2

let ferens = 50;

function ferentoceren(feren){
    console.log(isNaN(feren) ? false : ((feren - 32) * 5/9));
}

ferentoceren(ferens);

//#3

let a = 5
let b = 4
let ope = '*'
let operators = ['/' ,'*','+','-']
let checker = operators.map((i)=> ope == i)

function calculator(a,b,ope){
if(isNaN(a) || isNaN(b) || !checker.some(Boolean)) return false
if(ope == "-") return a - b
if(ope == "+") return a + b
if(ope == "*") return a * b
if(ope == "/") return a / b
}
console.log(calculator(a,b,ope))