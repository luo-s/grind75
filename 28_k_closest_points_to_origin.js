/*
Given an array of points where points[i] = [xi, yi] represents a point on 
the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance 
(i.e., ((x1 - x2)^2 + (y1 - y2)^2)^(0.5)).

You may return the answer in any order. 
The answer is guaranteed to be unique (except for the order that it is in).

1 <= k <= points.length <= 104
-104 <= xi, yi <= 104
*/

// https://leetcode.com/problems/k-closest-points-to-origin/description/

// hash table + sorting
// time complexity: O(nlogn)
// space complexity: O(n)
var kClosest = function (points, k) {
  let distMap = new Map();
  let distArr = [];
  let res = [];
  for (let [x, y] of points) {
    const distance = Math.sqrt(x * x + y * y);
    distArr.push(distance);
    distMap.set([x, y], distance);
  }
  distArr.sort((a, b) => a - b);
  for (let [point, distance] of distMap.entries()) {
    if (distance <= distArr[k - 1]) {
      res.push(point);
    }
  }
  return res;
};
