/*Given an integer array nums, find the subarray with the largest sum, 
and return its sum.
 */

// https://leetcode.com/problems/maximum-subarray/description/

// brute force -- time limit exceeded
// time complexity: O(n^3)
// space complexity: O(1)
var maxSubArray = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
};

// optimized brute force -- time limit exceeded
// time complexity: O(n^2)
// space complexity: O(1)
var maxSubArray = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};
