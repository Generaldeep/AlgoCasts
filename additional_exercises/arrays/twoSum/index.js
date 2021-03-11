function twoSum(nums, target) {
   const output = [];

    for (let [ind, val] of nums.entries()) {
        for (let k = ind+1; k <= nums.length; k++) {
            if (output.length > 0) return output;
            if (val+nums[k] === target) {
                 output.push(ind, k)
            }
        }
    }
    return output;
}

// console.log(twoSum([1,3,5,2,9], 8))
// console.log(twoSum([3,2,4], 6))
module.exports = twoSum;