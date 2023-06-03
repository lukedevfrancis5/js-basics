
function multiplyArrayByNumber(array, num) {
    newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * num);
    }

    return newArray;
}

array = [1, 2, 3, 4, 5];
num = 2;

console.log(multiplyArrayByNumber(array, num))

