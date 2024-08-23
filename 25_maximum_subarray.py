# Given an integer array nums, find the subarray with the largest sum, 
# and return its sum.

# https://leetcode.com/problems/maximum-subarray/description/

# Kadane's algorithm
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        maxSum, preSum = -float('inf'), 0
        for num in nums:
            # if presum < 0 then discard presum
            preSum = max(preSum + num, num) 
            maxSum = max(maxSum, preSum)
        return maxSum

            
            