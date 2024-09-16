# Given the head of a singly linked list, reverse the list, 
# and return the reversed list.

# https://leetcode.com/problems/reverse-linked-list/description/

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev