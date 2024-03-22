/*
Given the root of a binary tree, imagine yourself standing on the right 
side of it, return the values of the nodes you can see ordered from top 
to bottom.
*/

// https://leetcode.com/problems/binary-tree-right-side-view/description/

// find the rightmost node at each level
// level order traversal
var rightSideView = function (root) {
  let res = [];
  var levelOrder = function (node) {
    if (!node) return;
    let queue = [node];
    while (queue.length) {
      let len = queue.length; // number of nodes at this level
      for (let i = 0; i < len; i++) {
        let curr = queue.shift();
        if (i === len - 1) res.push(curr.val);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
  };
  levelOrder(root);
  return res;
};
