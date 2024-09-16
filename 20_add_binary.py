# Given two binary strings a and b, return their sum as a binary string.

# https://leetcode.com/problems/add-binary/
# related https://leetcode.com/problems/add-to-array-form-of-integer/description/

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        l1, l2, carry = len(a), len(b), 0
        p1, p2 = l1 - 1, l2 - 1
        ans = []
        while p1 >= 0 or p2 >= 0 or carry:
            if p1 >= 0:
                carry += int(a[p1])
                p1 -= 1
            if p2 >= 0:
                carry += int(b[p2])
                p2 -= 1
            ans.append(str(carry % 2))
            carry //= 2
        return ''.join(reversed(ans))
    
# one-liner
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]