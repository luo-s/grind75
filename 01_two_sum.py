# Given an array of integers nums and an integer target, return indices of 
# the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you 
# may not use the same element twice.

# You can return the answer in any order.

# https://leetcode.com/problems/two-sum/description/
        
# hash table solution
# time complexity: O(n)
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hash_map = {}
        for i in range(len(nums)):
            completion = target - nums[i]
            if completion in hash_map:
                return [hash_map[completion], i]
            hash_map[nums[i]] = i
