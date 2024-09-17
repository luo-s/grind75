# Given the root of a binary tree, return the level order traversal of its 
# nodes' values. (i.e., from left to right, level by level).

# https://leetcode.com/problems/binary-tree-level-order-traversal/
# similar LC 103 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        ans, queue = [], [root]
        while queue:
            level, size = [], len(queue)
            for _ in range(size):
                cur = queue.pop(0)
                level.append(cur.val)
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
            ans.append(level)
        return ans
            