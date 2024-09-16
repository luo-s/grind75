# Given a binary search tree (BST), find the lowest common ancestor (LCA) 
# node of two given nodes in the BST.

# According to the definition of LCA on Wikipedia: “The lowest common ancestor 
# is defined between two nodes p and q as the lowest node in T that has both 
# p and q as descendants (where we allow a node to be a descendant of itself).”

# All Node.val are unique.
# p != q
# p and q will exist in the BST.

# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

# recursion
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if (p.val < root.val and q.val < root.val):
            return self.lowestCommonAncestor(root.left, p, q)
        elif (p.val > root.val and q.val > root.val):
            return self.lowestCommonAncestor(root.right, p, q)
        else:
            return root