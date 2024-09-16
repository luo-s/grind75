# Given two strings s and t, return true if t is an anagram of s, 
# and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a 
# different word or phrase, typically using all the original letters exactly 
# once.

# s and t consist of lowercase English letters.

# https://leetcode.com/problems/valid-anagram/description/

# hash map solution
# time complexity: O(n)
# space complexity: O(n)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        cnt = dict()
        for char in s:
            cnt[char] = cnt.get(char, 0) + 1
        for char in t:
            if char not in cnt:
                return False
            if cnt[char] == 0:
                return False
            cnt[char] -= 1
        return True
    

            
