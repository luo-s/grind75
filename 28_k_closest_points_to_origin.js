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

// quick select
// time complexity: O(n); worst case O(n^2)
// space complexity: O(k)
var kClosest = function (points, k) {
  let res = [];
  var distance = (point) => point[0] ** 2 + point[1] ** 2;
  var quickSelect = (left, right) => {
    let pivot = points[right],
      pointer = left;
    for (let i = left; i < right; i++) {
      if (distance(points[i]) < distance(pivot)) {
        [points[i], points[pointer]] = [points[pointer], points[i]];
        pointer++;
      }
    }
    [points[right], points[pointer]] = [points[pointer], points[right]];
    // points[pointer] is the (pointer + 1)th closest point
    if (pointer > k) {
      // all k closest points are on the left
      return quickSelect(left, pointer - 1);
    } else if (pointer === k) {
      // left partition is the exact k closest points, no need to continue
      res.push(...points.slice(left, pointer));
    } else if (pointer < k) {
      // k closest points includes left partition, pivot, and possible part of right partition
      // push left partition and pivot to res
      res.push(...points.slice(left, pointer + 1));
      if (res.length === k) return;
      // continue quick select on right partition
      quickSelect(pointer + 1, right);
    }
  };
  quickSelect(0, points.length - 1);
  return res;
};

// optimized quick select
// time complexity: O(n); worst case O(n^2)
var kClosest = function (points, k) {
  // define the distance function
  var dist = (point) => point[0] ** 2 + point[1] ** 2;
  var partition = (arr, left, right) => {
    const pivot = right;
    let pointer = left;
    for (let i = left; i < pivot; i++) {
      if (dist(arr[i]) <= dist(arr[pivot])) {
        [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
        pointer++;
      }
    }
    // swap pivot to the correct position
    [arr[pivot], arr[pointer]] = [arr[pointer], arr[pivot]];
    return pointer; // return the index of the pivot
  };
  var quickSelect = (arr, left, right, k) => {
    // randomize pivot and swap to the end/right
    const rPivot = Math.floor(Math.random() * (right - left + 1)) + left;
    [arr[rPivot], arr[right]] = [arr[right], arr[rPivot]];
    // partition the array and get the index of the pivot
    const mid = partition(arr, left, right);
    const leftLength = mid - left + 1;
    // all k closest points are on the left, further sort left partition
    if (k < leftLength) quickSelect(arr, left, mid - 1, k);
    // left partition is good, further sort right partition
    if (k > leftLength) quickSelect(arr, mid + 1, right, k - leftLength);
    // if k === leftLength, no need to further sort
  };
  // run quickSelect algorithm, which will sort the first k elements
  quickSelect(points, 0, points.length - 1, k);
  // return the first k elements of the array
  return points.slice(0, k);
};
