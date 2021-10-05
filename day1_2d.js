//Write a function which check if items of an array are unique?
// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true
// ```
const arrOne = [1, 4, 6, 2, 3];

function checkUniqueness(arrOne){
    for (let i =0; i<arrOne.length; i++){
        if((arrOne.slice(i+1,arrOne.length)).indexOf(arrOne[i]) != -1){
            return false
        }
    }
    return true

}

console.log(checkUniqueness(arrOne))