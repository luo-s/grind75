/*
Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue 
(push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
*/

// https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
  this.queue = [];
};
MyQueue.prototype.push = function (x) {
  this.queue.push(x);
};
MyQueue.prototype.pop = function () {
  return this.queue.shift();
};
MyQueue.prototype.peek = function () {
  return this.queue[0];
};
MyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};
