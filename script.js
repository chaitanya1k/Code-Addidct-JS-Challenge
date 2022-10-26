// 1
function longestWord (str){
    const words = str.split(" ");
    let longestWord = '';
    words.forEach((word) => {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord;
}

console.log(longestWord('I will be there in a while'))
console.log(longestWord('The work be delay as expected'))