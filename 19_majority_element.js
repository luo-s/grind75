/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

n == nums.length
1 <= n <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
*/

// https://leetcode.com/problems/majority-element

// hash table
// time complexity O(n)
// space complexity O(n)
var majorityElement = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [key, value] of map.entries()) {
    if (value > nums.length / 2) return key;
  }
};

// sorting
// time complexity O(nlogn)
// space complexity O(1)
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// Boyer-Moore Voting Algorithm
// time complexity O(n)
// space complexity O(1)
var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
};
