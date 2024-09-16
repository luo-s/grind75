# Given an integer array nums, return an array answer such that answer[i] is 
# equal to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 
# 32-bit integer.

# You must write an algorithm that runs in O(n) time and without using the 
# division operation.

# https://leetcode.com/problems/product-of-array-except-self/description/

class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        l = len(nums)
        left, right, ans = [1 for _ in range(l)], [1 for _ in range(l)], [1 for _ in range(l)]
        for i in range(1, l):
            left[i] = left[i - 1] * nums[i - 1]
        for i in range(l - 2, -1, -1):
            right[i] = right[i + 1] * nums[i + 1]
        for i in range(l):
            ans[i] = left[i] * right[i]
        return ans