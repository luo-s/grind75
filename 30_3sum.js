/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

3 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5
*/

// https://leetcode.com/problems/3sum/description/

// two pointers
var threeSum = function (nums) {
  // corner case
  if (nums.length < 3) return [];
  // sort the array
  nums.sort((a, b) => a - b);
  let res = [];
  // iterate the first triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // set two pointers
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        // triplet found
        res.push([nums[i], nums[j], nums[k]]);
        // avoid duplicates
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  }
  return res;
};
