/*
Given the root of a binary tree, return the level order traversal of its 
nodes' values. (i.e., from left to right, level by level).
*/

// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

// breadth first search
var levelOrder = function (root) {
  // base case
  if (!root) return [];
  let result = [];
  var bfs = function (node, level, result) {
    if (node === null) return;
    if (result[level] === undefined) result[level] = [];
    result[level].push(node.val);
    if (node.left) bfs(node.left, level + 1, result);
    if (node.right) bfs(node.right, level + 1, result);
  };
  bfs(root, 0, result);
  return result;
};
