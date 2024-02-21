/*
You are given an array of non-overlapping intervals intervals where 
intervals[i] = [starti, endi] represent the start and the end of the ith 
interval and intervals is sorted in ascending order by starti. 

You are also given an interval newInterval = [start, end] that represents 
the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in 
ascending order by starti and intervals still does not have any overlapping 
intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^5
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 10^5
*/

// time complexity: O(n)
// space complexity: O(n)
var insert = function (intervals, newInterval) {
  let result = [];
  let [start, end] = newInterval;
  let pushed = false;
  // loop through the intervals
  for (let [currStart, currEnd] of intervals) {
    // if the current interval is less than the new interval
    if (start > currEnd) {
      result.push([currStart, currEnd]);
      // if the new interval is less than the current interval
    } else if (end < currStart) {
      result.push([start, end]);
      // push the current interval after the new interval (only once)
      if (!pushed) {
        result.push([currStart, currEnd]);
        pushed = true;
      }
      start = Infinity;
    } else {
      // merge the intervals
      start = Math.min(start, currStart);
      end = Math.max(end, currEnd);
    }
  }
  if (!pushed) result.push([start, end]);
  return result;
};
