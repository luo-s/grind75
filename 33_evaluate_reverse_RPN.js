/*
You are given an array of strings tokens that represents an arithmetic 
expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the 
expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 
32-bit integer.

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
*/

// stack
// time complexity: O(n)
// space complexity: O(n)
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] === "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      let num = (1 / stack.pop()) * stack.pop();
      stack.push(num < 0 ? Math.ceil(num) : Math.floor(num));
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};
