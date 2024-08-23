# Given an array of integers nums and an integer target, return indices of 
# the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you 
# may not use the same element twice.

# You can return the answer in any order.

# https://leetcode.com/problems/two-sum/description/

# brute force solution
# time complexity: O(n^2)
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        
# hash table solution
# time complexity: O(n)
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        map = {}
        for i in range(len(nums)):
            completion = target - nums[i]
            if completion in map:
                return [map[completion], i]
            map[nums[i]] = i
