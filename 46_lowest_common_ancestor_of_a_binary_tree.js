/*
Given a binary tree, find the lowest common ancestor (LCA) of 
two given nodes in the tree.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the 
lowest node in T that has both p and q as descendants (where we allow a 
node to be a descendant of itself).”

The number of nodes in the tree is in the range [2, 10^5].
-10^9 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.
*/

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/* binary tree traversal
 */
var lowestCommonAncestor = function (root, p, q) {
  // base case
  if (!root) return null;
  if (root === p || root === q) return root;
  if (!root.left && !root.right) return null;
  // recursive case
  let left = lowestCommonAncestor(root.left, p, q),
    right = lowestCommonAncestor(root.right, p, q);
  // if left and right are not null, then root is the LCA
  if (left && right) return root;
  return left || right;
};
