/*
You are given an integer array height of length n. There are n vertical 
lines drawn such that the two endpoints of the ith line are (i, 0) and 
(i, height[i]).

Find two lines that together with the x-axis form a container, such that 
the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

// https://leetcode.com/problems/container-with-most-water/description/

/* two pointers
- start with the widest container
- always move the shorter line inwards
*/
var maxArea = function (height) {
  let max = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let width = right - left;
    if (height[left] > height[right]) {
      max = Math.max(max, width * height[right]);
      right--;
    } else {
      max = Math.max(max, width * height[left]);
      left++;
    }
  }
  return max;
};
