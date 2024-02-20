/*
Given the head of a singly linked list, return the middle node of the 
linked list.

If there are two middle nodes, return the second middle node.

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

// https://leetcode.com/problems/middle-of-the-linked-list/description/

// array solution
// time complexity: O(n)
// space complexity: O(n)
var middleNode = function (head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.floor(arr.length / 2)];
};

// two pointers
// time complexity: O(n)
// space complexity: O(1)
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
