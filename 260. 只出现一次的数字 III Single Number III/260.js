/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let num1, num2;
    let sum, i;
    for(i=0; i<nums.length; i++) {
        sum ^= nums[i]
    }
    let bit_1 = 1;
        while((sum & 1) == 0) {
            sum >>= 1;
            bit_1 <<= 1;
        }
    for(i=0; i<nums.length; i++) {
        if((nums[i] & bit_1) == 0)
                num1 ^= nums[i];
            else
                num2 ^= nums[i];
    }
    return new Array(num1, num2);
};