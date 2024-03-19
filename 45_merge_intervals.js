/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input.
*/

// https://leetcode.com/problems/merge-intervals/description/

/* sort & merge
sort the intervals by start time ASC
merge: extend the latest interval end if overlap
*/
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let interval of intervals) {
    if (result.length === 0) result.push(interval);
    if (interval[0] > result[result.length - 1][1]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        interval[1]
      );
    }
  }
  return result;
};
