# Given a string s containing just the characters '(', ')', '{', '}', '[' and 
# ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# https://leetcode.com/problems/valid-parentheses/description/

# stack FILO solution
# time complexity: O(n)
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {'(': ')', '[': ']', '{': '}'}
        for char in s:
            if char in map:
                stack.append(char)
            elif len(stack) == 0 or map[stack.pop()] != char:
                return False
        return len(stack) == 0  # handle case like ']' or '['

            