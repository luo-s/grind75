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

// three pointers
// time complexity: O(n)
// space complexity: O(1)
var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    } else {
      mid++;
    }
  }
  return nums;
};

// two pointers, sort twice
// time complexity: O(n)
// space complexity: O(1)
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

// two pointers, one sort
// time complexity: O(n^2)
// space complexity: O(1)
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else if (nums[right] === 2) {
      right--;
    } else if (nums[left] === 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    } else if (nums[right] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    } else {
      // when nums[left] === 1 and nums[right] === 1
      if (right - 1 === left) {
        break;
      } else {
        let nextZero = nums.indexOf(0, left);
        let nextTwo = nums.lastIndexOf(2, right);
        if (nextZero !== -1) {
          [nums[left], nums[nextZero]] = [nums[nextZero], nums[left]];
          left++;
        }
        if (nextTwo !== -1) {
          [nums[right], nums[nextTwo]] = [nums[nextTwo], nums[right]];
          right--;
        }
        if (nextZero === -1 && nextTwo === -1) break;
      }
    }
  }
  return nums;
};
