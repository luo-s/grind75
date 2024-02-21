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

// brute force -- time limit exceeded
// time complexity: O(m*n)^2
// if mat[i][j] === 0, then distance is 0
// if mat[i][j] === 1, then distance is the minimum distance to a 0 (bfs)
var updateMatrix = function (mat) {
  var bfs = function (mat, i, j) {
    queue = [[i, j, 0]];
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
