# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. 
# In how many distinct ways can you climb to the top?
# 1 <= n <= 45

# https://leetcode.com/problems/climbing-stairs/

# recursive: a lot repetitive calculation
class Solution:
    def climbStairs(self, n: int) -> int:
        # base case
        if n == 1:
            return 1
        if n == 2:
            return 2
        # recursive case
        return self.climbStairs(n - 1) + self.climbStairs(n - 2)
    
# dynamic programming
class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [0] * (n + 1)  # dp = list(0 for _ in range(n + 1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i-1] + dp[i-2]
        return dp[-1]

