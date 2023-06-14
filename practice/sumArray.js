// This function gets the sum of an array
 function sumArray(nums) {
    let total = 0;
    for (let i in nums) {
         total += nums[i];
    }
    return total;
 }

console.log(sumArray([1, 2, 3, 4, 5]));