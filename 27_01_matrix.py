# Given an m x n binary matrix mat, return the distance of the nearest 0 for 
# each cell.

# The distance between two adjacent cells is 1.

# https://leetcode.com/problems/01-matrix/
# similar LC 1162 https://leetcode.com/problems/as-far-from-land-as-possible/


# BFS start with 0s
from collections import deque
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        # Initialize a queue for BFS and mark all the 0s
        queue = deque()
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    queue.append((i, j))
                else:
                    # Initialize 1s as infinity
                    mat[i][j] = float('inf')  
        # Perform BFS from each 0
        while queue:
            i, j = queue.popleft()
            for di, dj in directions:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and mat[ni][nj] > mat[i][j] + 1:
                    mat[ni][nj] = mat[i][j] + 1
                    queue.append((ni, nj))
        return mat


