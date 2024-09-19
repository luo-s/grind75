# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
# such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

# 3 <= nums.length <= 3000
# -10^5 <= nums[i] <= 10^5

# https://leetcode.com/problems/3sum/

# brute force
# time complexity O(n^2)
# space complexity O(n^2)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        l, seen, ans = len(nums), set(), []
        idx_map = {value:idx for idx, value in enumerate(nums)}
        
        for i in range(l - 2):
            for j in range(i + 1, l - 1):
                k = idx_map.get(- nums[i] - nums[j])
                if k is not None and k > j:
                    key = (nums[i], nums[j], nums[k])
                    if key not in seen:
                        ans.append([nums[i], nums[j], nums[k]])
                        seen.add(key)
        return ans
    
# two pointers
# time complexity O(n^2)
# space complexity O(n)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        l, ans = len(nums), []

        for i in range(l):
            # skip duplicate
            if i > 0 and nums[i] == nums[i - 1]: continue
            # two pointers
            left = i + 1
            right = l - 1
            while left < right:
                # skip duplicate
                while left < right and left > i + 1 and nums[left] == nums[left - 1]:   
                    left += 1
                # skip duplicate
                while left < right and right < l - 1 and nums[right + 1] == nums[right]:    
                    right -= 1
                # recheck left < right 
                if left < right and nums[i] + nums[left] + nums[right] == 0:
                    ans.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                elif nums[i] + nums[left] + nums[right] > 0:
                    right -= 1
                else:
                    left += 1
        return ans
