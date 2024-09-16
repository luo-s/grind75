# Given a binary tree, determine if it is height-balanced.

# A height-balanced binary tree is a binary tree in which the depth of the 
# two subtrees of every node never differs by more than one.

# https://leetcode.com/problems/balanced-binary-tree/description/

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.height(root) != -1

    def height(self, root):
        # base case
        if not root: return 0
        leftheight = self.height(root.left)
        rightheight = self.height(root.right)
        if leftheight == -1 or rightheight == -1: return -1
        # recursive case
        return max(leftheight, rightheight) + 1 if abs(leftheight - rightheight) <= 1 else -1