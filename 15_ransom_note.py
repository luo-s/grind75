# Given two strings ransomNote and magazine, return true if ransomNote can be 
# constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.
# ransomNote and magazine consist of lowercase English letters.

# https://leetcode.com/problems/ransom-note/description/

# hash-map solution
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        cnt = dict()
        for char in magazine:
            if char in cnt:
                cnt[char] += 1
            else:
                cnt[char] = 1
        for char in ransomNote:
            if char in cnt:
                if cnt[char] == 0:
                    return False
                cnt[char] -= 1
            else:
                return False
        return True
    
# built-in count method
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for char in ransomNote:
            if ransomNote.count(char) > magazine.count(char):
                return False
        return True