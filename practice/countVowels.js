
// this function will count the number of vowels in a string
function countVowels(str) {
    let counter = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    var str = str.toLowerCase();
    for (var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowels("hello world"))