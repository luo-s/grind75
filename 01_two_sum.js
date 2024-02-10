/*
Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you 
may not use the same element twice.

You can return the answer in any order.
*/

// I cannot use the same element twice, so I need to keep track of the
// elements I have already used. I can use a hash table.
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];
    if (map.has(number)) {
      return [map.get(number), i];
    }
    map.set(nums[i], i);
  }
};
