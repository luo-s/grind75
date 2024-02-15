/*
An image is represented by an m x n integer grid image where image[i][j] 
represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a 
flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the 
same color), and so on. Replace the color of all of the aforementioned 
pixels with color.

Return the modified image after performing the flood fill.
*/

// https://leetcode.com/problems/flood-fill/

// depth first search + stack (call stack)
var floodFill = function (image, sr, sc, color) {
  let m = image.length,
    n = image[0].length,
    startColor = image[sr][sc];
  var fill = function (r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== startColor)
      return;
    image[r][c] = color;
    fill(r - 1, c);
    fill(r + 1, c);
    fill(r, c - 1);
    fill(r, c + 1);
  };
  if (startColor !== color) fill(sr, sc);
  return image;
};

// breadth first search + queue
var floodFill = function (image, sr, sc, color) {
  let m = image.length,
    n = image[0].length,
    startColor = image[sr][sc];
  if (startColor === color) return image;
  const queue = [[sr, sc]];
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    image[r][c] = color;
    if (r > 0 && image[r - 1][c] === startColor) queue.push([r - 1, c]);
    if (r < m - 1 && image[r + 1][c] === startColor) queue.push([r + 1, c]);
    if (c > 0 && image[r][c - 1] === startColor) queue.push([r, c - 1]);
    if (c < n - 1 && image[r][c + 1] === startColor) queue.push([r, c + 1]);
  }
  return image;
};
