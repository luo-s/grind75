# Given the root of a binary tree, imagine yourself standing on the right 
# side of it, return the values of the nodes you can see ordered from top 
# to bottom.

# https://leetcode.com/problems/binary-tree-right-side-view/

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        import collections
        if not root: return []
        ans, queue = [], collections.deque([root])
        while queue:
            size = len(queue)
            for i in range(size):
                cur = queue.popleft()
                if i == size - 1:
                    ans.append(cur.val)
                if cur.left: queue.append(cur.left)
                if cur.right: queue.append(cur.right)
        return ans