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

// // quick select
// // time complexity: O(n); worst case O(n^2)
// var kClosest = function (points, k) {
//   // the algorithm runs from index to index
//   quickSelect(points, 0, points.length - 1, k);

//   return points.slice(0, k);
// };

// function quickSelect(arr, min, max, k) {
//   if (min >= max) return;
//   // Exits recursion when min and max have met after many iterations.
//   // Not 100% necessary as the function will end when k = leftLength.
//   // But it does save one iteration at the end and it's good practice to always have a basecase for your recursive functions

//   const rPivot = Math.floor(Math.random() * (max - min + 1)) + min;
//   [arr[rPivot], arr[max]] = [arr[max], arr[rPivot]];
//   // Get random index and swap it with the last item in the array because we use the last item as our pivot point when partitioning

//   const mid = partition(arr, min, max);
//   // pass pivot index (which is max now because of the swap)

//   const leftLength = mid - min + 1;
//   // the length of the left partition aka the amount of points we have that are less than the pivot

//   if (k < leftLength) quickSelect(arr, min, mid - 1, k);
//   // we have too many points in our left partition.
//   // since it isn't actually fully sorted (the elements in there are just less than the pivot),
//   // we run the function again but shrink our max boundary to the element left of the pivot

//   if (k > leftLength) quickSelect(arr, mid + 1, max, k - leftLength);
//   // we don't have enough points in our left partition.
//   // we run the function again but move our starting boundary to the element right of the pivot
//   // we reduce our k because we already know the n-th smallest-k points in leftLength. We just need k - leftLength more points to get the total being asked for.

//   // function stops running when k = leftLength
// }

// // Function to split the array down the pivot that was passed in as max.
// // At the end of the function, it will place the pivot in the correct location (ie. items to the left of it will be less and to the right will be greater)
// // and return its index.
// function partition(arr, min, max) {
//   const pivot = max; // use last item as pivot, but it's actually randomized before it's passed to this function
//   let i = min; // iterates through array
//   let j = min; // keeps track of items larger than pivot

//   for (; i < pivot; i++) {
//     // stop loop before the pivot
//     if (dist(arr[i]) <= dist(arr[pivot])) {
//       // using = keeps dupes close to original pivot (eg. if we just used < then dupes would be ignored)
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       // Assuming i is ahead of j when iterating through the array,
//       // And j is an element greater than the pivot,
//       // When we find an element i that is less than the pivot, we want to swap it so that the lesser value goes behind the pivot and the greater value ahead of the pivot

//       j++; // increment j to another value that is greater than the pivot
//     }
//   }

//   [arr[pivot], arr[j]] = [arr[j], arr[pivot]]; // puts pivot value in correct place where elements to the left are less and elements to the right are greater
//   return j; // return the index of the pivot
// }

// // Function to get the distance of a point. We can simplify the original distance formula to this because:
// // 1. We can omit the subtractions because the origin is at 0, 0
// // 2. We can omit the sqrt because we don't need the actual distance value. This is enough to get us something to use for comparisons.
// function dist(point) {
//   return point[0] * point[0] + point[1] * point[1];
// }
