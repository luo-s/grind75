/*
Given an integer array nums of unique elements, return all possible subsets
(the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.
*/

// https://leetcode.com/problems/subsets/description/

// backtracking without duplicates

var subsets = function (nums) {
  let path = [],
    result = [];
  nums.sort((a, b) => a - b);
  var dfs = function (nums, start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(nums, i + 1);
      path.pop();
    }
  };
  dfs(nums, 0);
  return result;
};
