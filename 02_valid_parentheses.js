/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and 
']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

// https://leetcode.com/problems/valid-parentheses/description/

// data structure: stack
var isValid = function (s) {
  // define a stack
  const stack = [];
  // define a map for matching parentheses
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // if the character is an open bracket, push it to the stack
      stack.push(s[i]);
    } else {
      // if the character is a close bracket, pop the last element from the stack
      const last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  // if the stack is empty, return true
  return stack.length === 0;
};
