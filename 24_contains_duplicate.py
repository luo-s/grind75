# Given an integer array nums, return true if any value appears at least 
# twice in the array, and return false if every element is distinct.

# 1 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9

# https://leetcode.com/problems/contains-duplicate/description/

# pythonic
# time complexity O(n)
# space compleity O(1)
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        return not len(set(nums)) == len(nums)

# time complexity O(n)
# space compleity O(1)
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        cnt = dict()
        for num in nums:
            if num not in cnt:
                cnt[num] = 1
            else:
                return True
        return False