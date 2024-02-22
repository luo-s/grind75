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

// sorting
// time complexity: O(nlogn)
// space complexity: O(1)
var kClosest = function (points, k) {
  var distance = (point) => point[0] ** 2 + point[1] ** 2;
  points.sort((a, b) => distance(a) - distance(b));
  return points.slice(0, k);
};
