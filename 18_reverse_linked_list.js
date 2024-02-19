/*
Given the head of a singly linked list, reverse the list, 
and return the reversed list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

// https://leetcode.com/problems/reverse-linked-list/description/

// construct a new linked list in reverse order
// time complexity: O(n)
// space complexity: O(n)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  // construct an array of the values of nodes in linked list
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  // create the new head
  let newHead = new ListNode(arr.pop());
  let ans = newHead;
  // construct the new linked list in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = new ListNode(arr[i]);
    newHead.next = node;
    newHead = newHead.next;
  }
  return ans;
};

// reverse the linked list in place
// save the next node before reversing the link of the current node
// time complexity: O(n)
// space complexity: O(1)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  // need a null node for the new tail
  let prev = null;
  let curr = head;
  // reverse the linked list in place
  while (curr) {
    // save the next node
    let next = curr.next;
    // reverse the link of the current node
    curr.next = prev;
    // reset the prev and curr nodes
    prev = curr;
    curr = next;
  }
  // prev is the new head
  return prev;
};
