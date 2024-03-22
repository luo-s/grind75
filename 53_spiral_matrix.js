/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

// https://leetcode.com/problems/spiral-matrix/description/

var spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length,
    direction = 0,
    result = [];
  let isVisited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  let i = 0,
    j = 0;
  while (result.length < m * n) {
    result.push(matrix[i][j]);
    isVisited[i][j] = true;
    if (direction === 0) {
      if (j + 1 < n && !isVisited[i][j + 1]) {
        j++;
      } else {
        direction = 1;
        i++;
      }
    } else if (direction === 1) {
      if (i + 1 < m && !isVisited[i + 1][j]) {
        i++;
      } else {
        direction = 2;
        j--;
      }
    } else if (direction === 2) {
      if (j - 1 >= 0 && !isVisited[i][j - 1]) {
        j--;
      } else {
        direction = 3;
        i--;
      }
    } else if (direction === 3) {
      if (i - 1 >= 0 && !isVisited[i - 1][j]) {
        i--;
      } else {
        direction = 0;
        j++;
      }
    }
  }
  return result;
};
