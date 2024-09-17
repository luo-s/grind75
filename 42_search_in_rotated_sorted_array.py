# There is an integer array nums sorted in ascending order (with distinct values).

# Prior to being passed to your function, nums is possibly rotated at an 
# unknown pivot index k (1 <= k < nums.length) such that the resulting array 
# is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
# (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
# and become [4,5,6,7,0,1,2].

# Given the array nums after the possible rotation and an integer target, 
# return the index of target if it is in nums, or -1 if it is not in nums.

# You must write an algorithm with O(log n) runtime complexity.

# All values of nums are unique.
# nums is an ascending array that is possibly rotated.

# https://leetcode.com/problems/search-in-rotated-sorted-array/

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        l, r = 0, len(nums) - 1
        while l <= r:
            # no int overflow in python3
            mid = (l + r) // 2
            if nums[mid] == target:
                return mid
            # if nums[mid] in first half
            if nums[0] <= nums[mid]:
                # if target at left side of nums[mid]
                if nums[0] <= target < nums[mid]:
                    r = mid - 1
                # if target at  right side of nums[mid]
                else:
                    l = mid + 1
            # if nums[mid] in second half
            else:
                # if target at right side of nums[mid]
                if nums[mid] < target <= nums[len(nums) - 1]:
                    l = mid + 1
                # if target at left side of nums[mid]
                else:
                    r = mid - 1
        return -1