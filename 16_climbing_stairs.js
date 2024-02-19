/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?
1 <= n <= 45
*/

// https://leetcode.com/problems/climbing-stairs/

// recursive solution -- time limit exceeded (overflows the call stack)
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n; // base case
  return climbStairs(n - 1) + climbStairs(n - 2); // recursive case
};

// dynamic programming solution
// construct a dp array to aviod repeated calculations
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
