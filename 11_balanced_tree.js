/*
Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the 
two subtrees of every node never differs by more than one.
*/

// https://leetcode.com/problems/balanced-binary-tree/description/

// if a binary tree is balanced, the left and right subtrees are balanced recursively as well.
var isBalanced = function (root) {
  // define a helper function to calculate the depth of a node
  var depth = function (node) {
    if (!node) {
      return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
  };
  // if the root is null, return true
  if (!root) {
    return true;
  }
  // if the difference between the depth of the left and right subtrees is greater than 1, return false
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  }
  // otherwise, recursively check the left and right subtrees
  return isBalanced(root.left) && isBalanced(root.right);
};

var isBalanced = function (root) {
  var height = function (node) {
    if (!node) return 0; // base case
    var left = height(node.left),
      right = height(node.right);
    // if the left or right subtree is unbalanced, or the height diff > 1, return -1
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    // otherwise, return the height of the current node
    return Math.max(left, right) + 1;
  };
  return height(root) !== -1;
  /*
    // If the tree is empty, we can say it’s balanced...
    if (root == null)  return true;
    // if the height of the tree is -1, it’s unbalanced
	if (height(root) == -1)  return false;
	return true;
    */
};
