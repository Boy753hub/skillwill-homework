//#1
users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana',age: 28}
]
function selector(users){
    let min = users.reduce((r, b) => Math.min(r, b.age), Number.POSITIVE_INFINITY);
    for(let i of users){
        if(i.age == min ){
            return i.name;
        }
    }
}
console.log(selector(users))

//#2

let obj = {
    name: 'Temo',
    age: 25,
    country: 'Sri Lanka'
}

function copyObject(obj){
    newObject = {}
    for(i in obj){
        newObject[i] = obj[i]
    }
    return newObject
}
console.log(copyObject(obj))

//#3

function randomWinner(){
    while(true){
        let player1 = Math.floor(Math.random() * 10) + 1
        let player2 = Math.floor(Math.random() * 10) + 1

        if(player1 === 3 || player2 === 3){
            if(player1 === 3 && player2 ===3) return 'its a tie'
            if(player1 === 3) return 'player 1 won'
            if(player2 === 3) return 'player 2 won'
        }
    }
}
console.log(randomWinner())
