// this function works
function findMax(num) {
    maxNum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxNum) {
            maxNum = num[i];
        }
    }
}

console.log(findMax([5, 2, 9, 1, 7]));