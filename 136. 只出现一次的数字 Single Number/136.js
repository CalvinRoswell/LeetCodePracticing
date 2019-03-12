<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum ^= nums[i]
    }
    return sum
=======
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum ^= nums[i]
    }
    return sum
>>>>>>> 89f709a1ed67f322bd9b0ae462cfe34ffaebd882
};