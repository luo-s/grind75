# Given an array nums of distinct integers, return all the possible permutations. 
# You can return the answer in any order.

# All the integers of nums are unique.

# https://leetcode.com/problems/permutations/
# advanced LC 47 https://leetcode.com/problems/permutations-ii/

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        used = [False] * l
        nums.sort()
        def backtracking(nums):
            # base case
            if len(path) == l:
                res.append(path[:])
                return
            # recursive case
            for i in range(l):
                # if this element has been used
                if used[i]:
                    continue
                path.append(nums[i])
                used[i] = True
                backtracking(nums)
                path.pop()
                used[i] = False
                
        backtracking(nums)
        return res