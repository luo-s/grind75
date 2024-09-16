# Given the root of a binary tree, invert the tree, and return its root.

# https://leetcode.com/problems/invert-binary-tree/description/

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root: return None
        left = self.invertTree(root.left)
        right = self.invertTree(root.right)
        root.left = right
        root.right = left
        return root