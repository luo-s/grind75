/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.
*/

// depth first search
// time complexity: O(n)
// space complexity: O(1)
var maxDepth = function (root) {
  if (!root) return 0; // base case
  let left = maxDepth(root.left),
    right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
