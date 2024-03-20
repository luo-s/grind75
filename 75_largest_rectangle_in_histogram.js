/*
Given an array of integers heights representing the histogram's bar height 
where the width of each bar is 1, return the area of the largest rectangle 
in the histogram.
*/

// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

/*
loop through the heights, calculate the max area based on the current height
need to know the left and right boundary of the current height
let left[i] be the number of columns that continuous >= heights[i] from the left
let right[i] be the number of columns that continuous >= heights[i] from the right
the current max are is heights[i] * (left[i] + right[i] + 1)
*/
var largestRectangleArea = function (heights) {
  let left = new Array(heights.length).fill(0),
    right = new Array(heights.length).fill(0);
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      let index = stack.pop();
      right[index] = i - index - 1;
    }
    stack.push(i);
    if (i === heights.length - 1) {
      while (stack.length > 0) {
        let index = stack.pop();
        right[index] = i - index;
      }
    }
  }
  stack = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      let index = stack.pop();
      left[index] = index - i - 1;
    }
    stack.push(i);
    if (i === 0) {
      while (stack.length > 0) {
        let index = stack.pop();
        left[index] = index - i;
      }
    }
  }
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    maxArea = Math.max(maxArea, heights[i] * (left[i] + right[i] + 1));
  }
  return maxArea;
};
