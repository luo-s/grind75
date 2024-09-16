# Given two strings ransomNote and magazine, return true if ransomNote can be 
# constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.
# ransomNote and magazine consist of lowercase English letters.

# https://leetcode.com/problems/ransom-note/description/

# hash-map solution
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        if len(ransomNote) > len(magazine): return False
        cnt = dict()
        for char in magazine:
            cnt[char] = cnt.get(char, 0) + 1
        for char in ransomNote:
            if char not in cnt: return False
            if cnt[char] == 0: return False
            cnt[char] -= 1
        return True
    
# built-in count method
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for char in ransomNote:
            if ransomNote.count(char) > magazine.count(char):
                return False
        return True