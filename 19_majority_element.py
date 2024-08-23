# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. 
# You may assume that the majority element always exists in the array.

# n == nums.length
# 1 <= n <= 5 * 10^4
# -10^9 <= nums[i] <= 10^9

# https://leetcode.com/problems/majority-element

# brute force solution
# time complexity: O(n^2)
# space complexity: O(n)
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        for i in set(nums):
            if nums.count(i) > len(nums) // 2:
                return i

# sorting  
# time complexity: O(nlogn)
# space complexity: O(1)
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        nums.sort()
        return nums[len(nums) // 2]
    
# dict()
# time complexity: O(n)
# space complexity: O(n)
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        if len(nums) < 2:
            return nums[0]
        cnt = dict()
        for num in nums:
            if num in cnt:
                cnt[num] += 1
                if cnt[num] > len(nums) // 2:
                    return num
            else:
                cnt[num] = 1

# collections module
import collections
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        counts = collections.Counter(nums)
        return max(counts.keys(), key=counts.get)

# Boyer-Moore voting algorithm
# time complexity: O(n)
# space complexity: O(1)
class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        candidate, count = None, 0
        for num in nums:
            if count == 0:
                candidate = num
            count += (1 if num == candidate else -1)            
        return candidate



