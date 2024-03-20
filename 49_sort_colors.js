/*
Given an array nums with n objects colored red, white, or blue, sort them 
in-place so that objects of the same color are adjacent, with the colors in 
the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, 
and blue, respectively.

You must solve this problem without using the library's sort function.

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

// https://leetcode.com/problems/sort-colors/description/

// two pointers, sort twice
var sortColors = function (nums) {
  // move all 0's to the left
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] === 0) left++;
    else if (nums[right] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    } else right--;
  }
  // move all 2's to the right
  right = nums.length - 1;
  while (left < right) {
    if (nums[right] === 2) right--;
    else if (nums[left] === 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    } else left++;
  }
  return nums;
};
