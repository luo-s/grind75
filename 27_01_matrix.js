/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for 
each cell.

The distance between two adjacent cells is 1.

m == mat.length
n == mat[i].length
1 <= m, n <= 10^4
1 <= m * n <= 10^4
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

// https://leetcode.com/problems/01-matrix/

// brute force -- time limit exceeded
// time complexity: O(m*n)^2
// if mat[i][j] === 0, then distance is 0, doing nothing
// if mat[i][j] === 1, then distance is the minimum distance to a 0 (bfs)
var updateMatrix = function (mat) {
  var bfs = function (mat, i, j) {
    let queue = [[i, j, 0]];
    while (queue.length) {
      let [x, y, distance] = queue.shift();
      if (mat[x][y] === 0) {
        return distance;
      } else {
        if (x > 0) queue.push([x - 1, y, distance + 1]);
        if (x < mat.length - 1) queue.push([x + 1, y, distance + 1]);
        if (y > 0) queue.push([x, y - 1, distance + 1]);
        if (y < mat[0].length - 1) queue.push([x, y + 1, distance + 1]);
      }
    }
  };
  let m = mat.length,
    n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) continue;
      mat[i][j] = bfs(mat, i, j);
    }
  }
  return mat;
};

// optimized bfs
// if mat[i][j] === 0, update the distance of all 4 directions
// time complexity: O(m*n) -- each cell is visited once
// space complexity: O(m*n)
var updateMatrix = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  // create a queue to store the zeroed-cells
  let queue = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) queue.push([i, j]);
      else mat[i][j] = Infinity; // mark as unvisited
    }
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    // dequeue the first element
    let [x, y] = queue.shift();
    // move 1 step in all 4 directions and queue the cells
    for (let [dx, dy] of directions) {
      let i = x + dx,
        j = y + dy;
      // if out of bounds or the distance is already less than the current distance + 1, continue
      if (i < 0 || i >= m || j < 0 || j >= n || mat[i][j] <= mat[x][y] + 1)
        continue;
      // update the distance
      mat[i][j] = mat[x][y] + 1;
      // queue the cell
      queue.push([i, j]);
    }
  }
  return mat;
};
