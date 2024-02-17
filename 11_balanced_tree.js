/*
Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

// https://leetcode.com/problems/balanced-binary-tree/description/

var isBalanced = function(root) {
    // define a helper function to calculate the depth of a node
    var depth = function(node) {
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