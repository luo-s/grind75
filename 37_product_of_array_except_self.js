/*
Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 
32-bit integer.

You must write an algorithm that runs in O(n) time and without using the 
division operation.

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
*/

/* two pointers
res[i] = (nums[0] * ... * nums[i-1]) * (nums[i+1] * ... * nums[n-1])
       = left                        * right
*/
// time complexity: O(n)
// space complexity: O(n)
var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(1),
    right = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(left[i] * right[i]);
  }
  return res;
};
