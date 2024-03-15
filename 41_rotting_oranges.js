/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten 
orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a 
fresh orange. If this is impossible, return -1.

1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/

// https://leetcode.com/problems/rotting-oranges/description/

var orangesRotting = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    rotten = [],
    fresh = 0;
  // get all the rotten oranges and the number of fresh oranges
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) rotten.push([i, j, 0]);
      else if (grid[i][j] === 1) fresh += 1;
    }
  }
  // if there are no fresh oranges, return 0
  if (fresh === 0) return 0;
  // if there are no rotten oranges, return -1
  if (rotten.length === 0) return -1;
  // bfs
  let queue = [];
  for (let [i, j, time] of rotten) {
    queue.push([i, j, time]);
  }
  // bfs function: 1) update grid, 2) update fresh, 3) add to queue
  while (queue.length > 0) {
    let [i, j, time] = queue.shift();
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] < 2) continue;
    else {
      if (i + 1 < m && grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        fresh -= 1;
        if (fresh === 0) return time + 1;
        queue.push([i + 1, j, time + 1]);
      }
      if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        fresh -= 1;
        if (fresh === 0) return time + 1;
        queue.push([i - 1, j, time + 1]);
      }
      if (j + 1 < n && grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        fresh -= 1;
        if (fresh === 0) return time + 1;
        queue.push([i, j + 1, time + 1]);
      }
      if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        fresh -= 1;
        if (fresh === 0) return time + 1;
        queue.push([i, j - 1, time + 1]);
      }
    }
  }
  return -1;
};
