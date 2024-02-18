/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?
*/

// https://leetcode.com/problems/climbing-stairs/

// recursive solution
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
