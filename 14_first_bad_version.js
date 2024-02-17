/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

// https://leetcode.com/problems/first-bad-version/description/

// binary search
// time compleixty O(logn)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n + 1;
        while (left < right) {  // binary search [left, right); loop ends when left === right
            let mid = left + Math.floor((right - left) / 2); // lower mid
            if (isBadVersion(mid)) {    // if mid is bad, [mid, right) are all bad
                right = mid;
            } else {    // if mid is good, [left, mid] are all good, first bad is in [mid + 1, right)
                left = mid + 1;
            }
        }
        return left;
    };
};