//How many words were used to construct this sentence. Now, don't exclude one letter words.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function varietyOfWords(sentence){
    const cleanText = sentence.replace(/[;#%&@!$']/g, "")
    let textArray = 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'.split(" ")
    let set = new Set()
    for( let word of textArray){
        if (word.length > 1){
            set.add(word)        
        }    
    }
    console.log(set.size)
}
varietyOfWords(sentence) 