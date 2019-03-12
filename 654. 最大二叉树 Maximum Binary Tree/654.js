/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0) return null;
    var index = nums.indexOf(Math.max(...nums));
    var answer = new TreeNode(nums[index]);
    answer.left = constructMaximumBinaryTree(nums.slice(0, index));
    answer.right = constructMaximumBinaryTree(nums.slice(index + 1));
    return answer;
};