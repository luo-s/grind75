# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.

# https://leetcode.com/problems/container-with-most-water/

# two pointers: always move shorter pointer (move higher pointer will never get larger area)
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right, max_area = 0, len(height) - 1, 0
        while left < right:
            max_area = max(max_area, min(height[left], height[right]) * (right - left))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_area