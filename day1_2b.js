// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

function sevenRandomNumbers(){
    let array = [] 
    while(array.length != 7){
        let ramdomNum = Math.floor(Math.random()*10)
        if ( array.indexOf(ramdomNum) == -1){
            array.push(ramdomNum)
        }
    }
    console.log(array)
}

sevenRandomNumbers() //[1,4,5,7,9,8,0]
