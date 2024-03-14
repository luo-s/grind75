/*
Given the root of a binary tree, determine if it is a valid BST.

A valid BST is defined as follows:
1) The left subtree of a node contains only nodes with keys less than the node's key.
2) The right subtree of a node contains only nodes with keys greater than the node's key.
3) Both the left and right subtrees must also be binary search trees.
*/

// https://leetcode.com/problems/validate-binary-search-tree/

// dfs
var isValidBST = function (root) {
  var dfs = function (node, min, max) {
    // base case
    if (!node) return true;
    if (node.val > min && node.val < max) {
      // recursive case
      return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    return false;
  };
  return dfs(root, -Infinity, Infinity);
};
