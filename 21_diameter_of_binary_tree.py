# Given the root of a binary tree, return the length of the diameter of the tree.

# The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

# The length of a path between two nodes is represented by the number of edges between them.

# https://leetcode.com/problems/diameter-of-binary-tree/description/

# 找到一个节点，使该节点左子树深度 + 右子树深度达到最大
# Diameter = max_depth(left-child) + max_depth(right-child)
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        max_d = 0
        def depth(node: Optional[TreeNode]) -> int:
            # base case
            if not node:
                return 0
            # 左子树的最大深度
            left = depth(node.left)
            # 右子树的最大深度
            right = depth(node.right)
            nonlocal max_d
            # update max_d with 当前节点的最大直径
            max_d = max(max_d, left + right)
            # 当前节点的最大深度
            return max(left, right) + 1
        depth(root)
        return max_d