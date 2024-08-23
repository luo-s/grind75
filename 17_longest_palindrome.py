# Given a string s which consists of lowercase or uppercase letters, return 
# the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a 
# palindrome here.

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.

# https://leetcode.com/problems/longest-palindrome

# use set() 
class Solution:
    def longestPalindrome(self, s: str) -> int:
        odd, cnt = 0, 0
        for i in s:
            c = s.count(i)
            if c % 2 == 0:
                cnt += c
            else:
                odd = 1
                cnt += (c-1)
        return cnt if not odd else cnt + 1

class Solution:
    def longestPalindrome(self, s: str) -> int:
        ans = 0
        cnt = dict()
        for char in s:
            if char in cnt:
                cnt[char] += 1
            else:
                cnt[char] = 1
        for ele in cnt:
            if cnt[ele] % 2:
                ans += cnt[ele] - 1
            else:
                ans += cnt[ele]
        for ele in cnt:
            if cnt[ele] % 2:
                ans += 1
                break
        return ans
    
