# You are a product manager and currently leading a team to develop a new product. 
# Unfortunately, the latest version of your product fails the quality check. 
# Since each version is developed based on the previous version, all the versions after a bad version are also bad.

# Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
# which causes all the following ones to be bad.

# You are given an API bool isBadVersion(version) which returns whether version is bad. 
# Implement a function to find the first bad version. You should minimize the number of calls to the API.

# https://leetcode.com/problems/first-bad-version/description/

# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

# key: isBadVersion(i) == True, isBadVersion(i-1) == False, then i is the first bad version
class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n  # search space: [1, n]
        while left < right: # end with left = right
            mid = left + (right - left) // 2
            if isBadVersion(mid) == True:   # target is in [left, mid]
                right = mid
            else:   # mid is good version, target is in [mid + 1, right]
                left = mid + 1
        return left
