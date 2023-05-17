//#1

let string = "The quick brown fox jumps over the lazy dog If the dog reacted, was it really lazy?"
let valueToReplace = 'dog'
let valueToReplaceWith = 'monkey'
function replaceWord(string, valueToReplace, valueToReplaceWith){
    let newString = ""
    let array = string.split(' ')
    if(array.includes(valueToReplace)){
        array.map((word) => {
                if(word !== valueToReplace){
                    newString += word + " "
                }else{
                    newString += valueToReplaceWith + " "
                } 
            })                        
    return newString
    }
}
console.log(replaceWord(string,valueToReplace,valueToReplaceWith))

//#2

let string = 'They saw a certain stranger knight; he sat weeping on the bank of the stream, he held his black horse by the rein, he looked like a lion and a hero; his bridle, armour and saddle were thickly bedight with pearls; the rose (of his cheek) was frozen in tears that welled up from his woe-stricken heart.'

function toUpperCase(string){
    let newString = string.toUpperCase()
    return newString
}

console.log(toUpperCase(string))

//#3

let obj = [
    {name: 'Lasha',age: 30},
    {name: 'Saba', age: 20},
    {name: 'gela', age: 10},
    {name: 'zviadi', age: 50},
]
function sortingObj(obj){
    let min = obj.sort((a, b)=> a.age - b.age);
    return min
        
}
console.log(...sortingObj(obj))