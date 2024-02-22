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
  let res = [],
    distMap = new Map(),
    distArr = [];
  // map the distance of each point to the origin
  for (let [x, y] of points) {
    const distance = x * x + y * y;
    distArr.push(distance);
    distMap.set([x, y], distance);
  }
  // sort the distance array, the kth closest distance is distArr[k - 1]
  distArr.sort((a, b) => a - b);
  // filter out the points that have distance <= distArr[k - 1]
  for (let [point, distance] of distMap.entries()) {
    if (distance <= distArr[k - 1]) {
      res.push(point);
    }
  }
  return res;
};

// sorting, no need to use hash table
// time complexity: O(nlogn)
// space complexity: O(1)
var kClosest = function (points, k) {
  points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2));
  return points.slice(0, k);
};
