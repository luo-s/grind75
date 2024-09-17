# Given an array of intervals where intervals[i] = [starti, endi], 
# merge all overlapping intervals, and return an array of the non-overlapping
# intervals that cover all the intervals in the input.

# https://leetcode.com/problems/merge-intervals/
# related LC 57 https://leetcode.com/problems/insert-interval/

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        low, hi, l = intervals[0][0], intervals[0][1], len(intervals)
        ans = []
        for i in range(1, l):
            if hi < intervals[i][0]:
                ans.append([low, hi])
                low = intervals[i][0]
                hi = intervals[i][1]
            else:
                low = min(low, intervals[i][0])
                hi = max(hi, intervals[i][1])
        # append the last
        ans.append([low, hi])
        return ans
