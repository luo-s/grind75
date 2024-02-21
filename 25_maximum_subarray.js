/*Given an integer array nums, find the subarray with the largest sum, 
and return its sum.
 */

// https://leetcode.com/problems/maximum-subarray/description/

// brute force -- time limit exceeded
// compare all possible subarrays, one by one
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
// compare subarrays with the same starting index, get the temp max
// then compare all the temp maxes with all possible starting index
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

// Kadane's algorithm
// we don't need to calculate temp max for all starting index
// loop through the array, calculate the sum of the subarray
// if the sum is negative, we can discard the previous subarray
var maxSubArray = function (nums) {
  let max = -Infinity,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // if the sum is negative, we can discard the previous subarray
    sum = Math.max(sum + nums[i], nums[i]);
    // update the max
    max = Math.max(max, sum);
  }
  return max;
};
