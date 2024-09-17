# Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

# https://leetcode.com/problems/kth-smallest-element-in-a-bst/

# in-order traversal BST (LNR) -> result in an increasing list
# return (k-1)th element
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        ans = []
        def inorder(node):
            if not node: return
            inorder(node.left)
            ans.append(node.val)
            inorder(node.right)
        inorder(root)
        return ans[k - 1]