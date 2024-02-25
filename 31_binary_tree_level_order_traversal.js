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
  var bfs = function (node, level, array) {
    if (node === null) return;
    if (array[level] === undefined) array[level] = [];
    array[level].push(node.val);
    bfs(node.left, level + 1, array);
    bfs(node.right, level + 1, array);
  };
  bfs(root, 0, result);
  return result;
};

// depth first search
var levelOrder = function (root) {
  // base case
  if (!root) return [];
  let result = [];
  var dfs = function (node, level, array) {
    if (node === null) return;
    if (array[level] === undefined) array[level] = [];
    array[level].push(node.val);
    dfs(node.left, level + 1, array);
    dfs(node.right, level + 1, array);
  };
  dfs(root, 0, result);
  return result;
};
