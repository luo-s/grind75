# Given a string s, find the length of the longest substring without 
# repeating characters.

# https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        slow, fast, max_cnt, l = 0, 0, 0, len(s)
        chars = set()
        while fast < l:
            if s[fast] not in chars:
                chars.add(s[fast])
                fast += 1
                max_cnt = max(max_cnt, len(chars))
            # keep moving left until window only has unique char
            else:
                chars.remove(s[slow])
                slow += 1
        return max_cnt
    
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, max_cnt, l = 0, 0, 0, len(s)
        window = dict()
        while right < l:
            window[s[right]] = window.get(s[right], 0) + 1
            # keep moving left until window only has unique char
            while window[s[right]] > 1:
                window[s[left]] -= 1
                left += 1
            max_cnt = max(max_cnt, right - left + 1)
            right += 1
        return max_cnt