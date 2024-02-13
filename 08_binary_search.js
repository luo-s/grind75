/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.

You must write an algorithm with O(log n) runtime complexity.
*/

// https://leetcode.com/problems/binary-search/description/

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {  // exit when left === right
        let mid = left + Math.floor((right - left) / 2); // lower mid
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left] === target ? left : -1;
}

