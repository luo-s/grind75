# Given an m x n 2D binary grid grid which represents a map of '1's (land) 
# and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent 
# lands horizontally or vertically. You may assume all four edges of the 
# grid are all surrounded by water.

# 1 <= m, n <= 300
# grid[i][j] is '0' or '1'.

# https://leetcode.com/problems/number-of-islands/

# DFS
class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        m, n, cnt = len(grid), len(grid[0]), 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    self.dfs(grid, m, n, i, j)
                    cnt += 1
        return cnt
    
    def dfs(self, grid, m, n, i, j):
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        for di, dj in directions:
            ni, nj = i + di, j + dj
            self.dfs(grid, m, n, ni, nj)



