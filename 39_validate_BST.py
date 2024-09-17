# Given the root of a binary tree, determine if it is a valid BST.

# A valid BST is defined as follows:
# 1) The left subtree of a node contains only nodes with keys less than the node's key.
# 2) The right subtree of a node contains only nodes with keys greater than the node's key.
# 3) Both the left and right subtrees must also be binary search trees.

# https://leetcode.com/problems/validate-binary-search-tree/

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.dfs(root, float('inf'), float('-inf'))
        
    def dfs(self, root, upper_limit, lower_limit):
        if not root: return True
        return lower_limit < root.val < upper_limit and self.dfs(root.left, root.val, lower_limit) and self.dfs(root.right, upper_limit, root.val)