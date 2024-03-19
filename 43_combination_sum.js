/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen 
numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen 
numbers is different.

The test cases are generated such that the number of unique combinations 
that sum up to target is less than 150 combinations for the given input.
*/

// https://leetcode.com/problems/combination-sum/description/

/*
backtracking
*/
var combinationSum = function (candidates, target) {
  let result = [],
    path = [];
  var backtracking = function (candidates) {
    let sum = path.reduce((a, b) => a + b, 0);
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = 0; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtracking(candidates);
      path.pop();
    }
  };
  backtracking(candidates);
  return result;
};
