/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an 
unknown pivot index k (1 <= k < nums.length) such that the resulting array 
is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
(0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

All values of nums are unique.
nums is an ascending array that is possibly rotated.
*/

// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/*
rotated ascending array: split the array into two ascending parts
*/

var search = function (nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  let left = 0,
    right = nums.length - 1;
  if (target >= nums[0]) {
    // target is in the left part
    while (left <= right) {
      // stop condition: left > right
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] >= nums[0]) {
        // mid is in the left part
        if (nums[mid] > target) {
          right = mid - 1;
        } else if (nums[mid] < target) {
          left = mid + 1;
        }
      } else if (nums[mid] < nums[0]) {
        // mid is in the right part
        right = mid - 1;
      }
    }
  } else {
    // target is in the right part
    while (left <= right) {
      // stop condition: left > right
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] >= nums[0]) {
        // mid is in the left part
        left = mid + 1;
      } else if (nums[mid] < nums[0]) {
        // mid is in the right part
        if (nums[mid] > target) {
          right = mid - 1;
        } else if (nums[mid] < target) {
          left = mid + 1;
        }
      }
    }
  }
  return -1;
};
