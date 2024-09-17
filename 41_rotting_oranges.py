# /You are given an m x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.

# Every minute, any fresh orange that is 4-directionally adjacent to a rotten 
# orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a 
# fresh orange. If this is impossible, return -1.

# 1 <= m, n <= 10
# grid[i][j] is 0, 1, or 2.
# */

# https://leetcode.com/problems/rotting-oranges/

# BFS
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        import collections
        m, n = len(grid), len(grid[0])
        queue = collections.deque()
        fresh_cnt, minute = 0, 0
        
        # Step 1: Initialize the queue with all rotten oranges and count the fresh ones
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    fresh_cnt += 1
                # Add rotten oranges to the queue with time 0
                elif grid[i][j] == 2:
                    queue.append((i, j, 0)) 
        
        # Step 2: BFS to spread rot to neighboring fresh oranges
        while queue:
            i, j, minute = queue.popleft()
            
            # Visit the four neighboring cells
            for ni, nj in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:
                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == 1:
                    grid[ni][nj] = 2  # Mark fresh orange as rotten
                    fresh_cnt -= 1
                    queue.append((ni, nj, minute + 1))  # Spread the rot

        # Step 3: If there are no fresh oranges left, return the time; otherwise, return -1
        return minute if fresh_cnt == 0 else -1