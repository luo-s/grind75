/*
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/

// https://leetcode.com/problems/contains-duplicate/description/

// hash table
// time complexity: O(n)
// space complexity: O(n)
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) return true;
    map.set(num, 1);
  }
  return false;
};

var containsDuplicate = function (nums) {
  let dict = {};
  for (let num of nums) {
    if (dict[num]) return true;
    dict[num] = 1;
  }
  return false;
};

var containsDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

// sorting
// time complexity: O(nlogn)
// space complexity: O(1)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
};
