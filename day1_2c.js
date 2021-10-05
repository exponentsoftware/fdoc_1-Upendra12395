// Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements 
//appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces 
//a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray(array){
    let array1 = []
    for (let i=array.length - 1;i>=0;i--){
        array1.push(array[i])
    }
    return array1
}

console.log(reverseArray(["A", "B", "C"]));
//["C", "B", "A"]