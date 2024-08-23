# Given an array of integers nums which is sorted in ascending order, 
# and an integer target, write a function to search target in nums. 
# If target exists, then return its index. Otherwise, return -1.

# All the integers in nums are unique.
# nums is sorted in ascending order.

# You must write an algorithm with O(log n) runtime complexity.

# https://leetcode.com/problems/binary-search/

# direct search: divide search space in 3 partitions [left, mid - 1], mid, [mid + 1, right]
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1  # search space [left, right]
        while left <= right:    # loop end at: left = right + 1
            mid = left + (right - left) // 2
            if nums[mid] < target: # target in [mid + 1, right]
                left = mid + 1
            elif nums[mid] > target: # target in [left, mid - 1]
                right = mid - 1
            else:   # found
                return mid
        return -1

# exclusion search: divide search space in 2 partitions
# mid = left + (right - left) // 2 pair with left = mid + 1, divide into [left, mid], [mid + 1, right]
# mid = left + (right - left + 1) // 2 pair with right = mid - 1 , divide into [left, mid - 1], [mid, right]
class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1  # search space [left, right]
        while left < right:     # loop end at left = right, need another final check
            mid = left + (right - left) // 2
            if nums[mid] < target:  # target not in [left, mid], search [mid + 1, right]
                left = mid + 1
            else: 
                right = mid
            # mid = left + (right - left + 1) // 2
            # if nums[mid] > target:  # target not in [mid, right], search [left, mid - 1]
            #     right = mid - 1
            # else:
            #     left = mid
        return left if nums[left] == target else -1