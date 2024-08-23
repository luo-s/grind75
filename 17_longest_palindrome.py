# Given a string s which consists of lowercase or uppercase letters, return 
# the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a 
# palindrome here.

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.

# https://leetcode.com/problems/longest-palindrome

# set() 
class Solution:
    def longestPalindrome(self, s: str) -> int:
        odd_present, cnt = 0, 0
        for i in set(s):
            c = s.count(i)
            if c % 2 == 0:
                cnt += c
            else:
                odd_present = 1
                cnt += (c-1)
        return cnt if not odd_present else cnt + 1

# dict()
class Solution:
    def longestPalindrome(self, s: str) -> int:
        ans, cnt, odd_present = 0, dict(), 0
        for char in s:
            cnt[char] = cnt.get(char, 0) + 1
        for ele in cnt:
            ans += (cnt[ele]-1 if cnt[ele] % 2 else cnt[ele])
            if cnt[ele] % 2:
                odd_present = 1
        return ans + 1 if odd_present else ans
    
