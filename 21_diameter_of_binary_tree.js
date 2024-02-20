/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any 
two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of 
edges between them.
*/

// https://leetcode.com/problems/diameter-of-binary-tree/description/

// brute force -- huge call stack (nested recursive calls)
var diameterOfBinaryTree = function (root) {
  // define a helper function to calculate the depth of a tree
  var depth = function (node) {
    if (!node) return 0;
    let left = depth(node.left),
      right = depth(node.right);
    return Math.max(left, right) + 1;
  };
  let maxDiameter = 0;
  // define a helper function to calculate the diameter of a tree
  var dfs = function (node) {
    if (!node) return maxDiameter;
    let left = depth(node.left),
      right = depth(node.right);
    maxDiameter = Math.max(maxDiameter, left + right);
    dfs(node.left);
    dfs(node.right);
    return maxDiameter;
  };
  return dfs(root);
};
