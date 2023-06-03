
function calcSum(nums){
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum+= nums[i];
    }

    return sum;
}

const nums = [2, 4, 6, 8];
const result = calcSum(nums);
console.log(result);