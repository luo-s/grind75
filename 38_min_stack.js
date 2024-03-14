/*
Design a stack that supports push, pop, top, and retrieving the minimum 
element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

var MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
