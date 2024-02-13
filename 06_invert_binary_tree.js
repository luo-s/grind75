/*
Given the root of a binary tree, invert the tree, and return its root.
*/

//https://leetcode.com/problems/invert-binary-tree/description/

var invertTree = function (root) {
  if (!root) return null;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
