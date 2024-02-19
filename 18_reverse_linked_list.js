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

// construct another linked list in reverse order
// create a array to store the values of the linked list
// time complexity: O(n)
// space complexity: O(n)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let newHead = new ListNode(arr.pop());
  let ans = newHead;
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = new ListNode(arr[i]);
    newHead.next = node;
    newHead = newHead.next;
  }
  return ans;
};
