// Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords 
//takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
function countWords(paragraph,word1, word2){
    const regExp1 = new RegExp(word1,'g')
    const regExp2 = new RegExp(word2, 'g')

    const matches1 = paragraph.matchAll(regExp1)
    let temp1 = []
    for(let match of matches1){
        temp1.push(match[0])
    }
    
    const matches2 = paragraph.matchAll(regExp2)
    let temp2 = []
    for(let match of matches2){
        temp2.push(match[0])
    }
    if(temp1.length > temp2.length){
        console.log(`The word ${word1} more frequetly occurred than ${word2}`)
    }else{
        console.log(`The word ${word2} more frequetly occurred than ${word1}`)
    }
   
}


countWords(paragraph,'love', 'you') //The word love more frequently occurred than you.

