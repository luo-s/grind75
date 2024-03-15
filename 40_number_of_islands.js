/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) 
and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent 
lands horizontally or vertically. You may assume all four edges of the 
grid are all surrounded by water.

1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

// https://leetcode.com/problems/number-of-islands/description/

// dfs
var numIslands = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  var dfs = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") {
      return 0;
    } else {
      grid[i][j] = "0";
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1);
      return 1;
    }
  };
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        ans += dfs(grid, i, j);
      }
    }
  }
  return ans;
};
