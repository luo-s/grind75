/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
*/
// All the integers of nums are unique.
// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  let result = [],
    path = [];
  var backtracking = function (nums) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      backtracking(nums);
      path.pop();
    }
  };
  backtracking(nums);
  return result;
};
