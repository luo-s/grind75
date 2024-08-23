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
        cnt = dict()
        for char in s:
            if char in cnt:
                cnt[char] += 1
            else:
                cnt[char] = 1
        for char in t:
            if char in cnt:
                cnt[char] -= 1
                if cnt[char] == 0:
                    del cnt[char]
            else:
                return False
        return not cnt
            
