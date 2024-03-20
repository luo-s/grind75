/*
Given an integer array nums, return true if you can partition the array 
into two subsets such that the sum of the elements in both subsets is equal 
or false otherwise.
*/

// https://leetcode.com/problems/partition-equal-subset-sum/description/

/*
find a subset that the sum is total sum / 2
backtracking with memoization -- low performance
*/
var canPartition = function (nums) {
  // backtracking
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) return false;
  sum /= 2;
  nums.sort((a, b) => b - a);
  let path = [],
    memo = new Map();
  var dfs = function (index, next, target) {
    let key = next + "-" + target;
    if (memo.has(key)) return memo.get(key);
    // base case
    if (target === 0) {
      memo.set(key, true);
      return true;
    }
    if (target < 0 || index.length >= nums.length) {
      memo.set(key, false);
      return false;
    }
    // recursive case
    for (let i = 0; i < nums.length; i++) {
      if (index.includes(i)) continue;
      index.push(i);
      if (dfs(index, nums[i + 1], target - nums[i])) {
        memo.set(key, true);
        return true;
      }
      index.pop();
    }
    memo.set(key, false);
    return false;
  };
  return dfs([], nums[1], sum);
};

/*
dynamic programming
let dp[i][j] = true if there is a subset of first i elements that 
has a sum of j.
dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
*/

var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2) return false;
  sum /= 2;
  let dp = new Array(nums.length + 1)
    .fill()
    .map(() => new Array(sum + 1).fill(false));
  // initialize: always true if sum = 0, for all i (empty subset)
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }
  // loop through all elements and sum
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      // index i represents first i elements: nums[0], ..., nums[i-1]
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nums.length][sum];
};
