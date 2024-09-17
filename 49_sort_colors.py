# Given an array nums with n objects colored red, white, or blue, sort them 
# in-place so that objects of the same color are adjacent, with the colors in 
# the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, 
# and blue, respectively.

# You must solve this problem without using the library's sort function.

# n == nums.length
# 1 <= n <= 300
# nums[i] is either 0, 1, or 2.

# https://leetcode.com/problems/sort-colors/

# two pointers + two traversal
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # first traversal: sort 0
        left, right = 0, len(nums) - 1
        while left < right:
            if left == 0:
                left += 1
            elif right != 0:
                right -= 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        # second traversal: sort 2
        if nums[left] == 0: left += 1
        right = len(nums) - 1
        while left < right:
            if left == 1:
                left += 1
            elif right == 2:
                right -= 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        
# optimized: three pointers + one traversal
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        low, mid, hi = 0, 0, len(nums) - 1
        while mid <= hi:
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == 2:
                nums[mid], nums[hi] = nums[hi], nums[mid]
                hi -= 1
            else:
                mid += 1
            

