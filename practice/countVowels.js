
// this function will count the number of vowels in a string
function countVowels(str) {
    let counter = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (let vowels in str){
        counter++;
    }
    return counter;
}

console.log(countVowels("hello world"))