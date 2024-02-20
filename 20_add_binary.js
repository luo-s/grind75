/*
Given two binary strings a and b, return their sum as a binary string.

1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

// https://leetcode.com/problems/add-binary/
// related https://leetcode.com/problems/add-to-array-form-of-integer/description/

// brute force
// time complexity: O(n^2) (unshift operation is O(n))
// space complexity: O(n)
var addBinary = function (a, b) {
  let arrA = a.split(""),
    arrB = b.split(""),
    ans = [];
  let carry = 0;
  while (arrA.length || arrB.length) {
    let sum = (arrA.pop() || 0) * 1 + (arrB.pop() || 0) * 1 + carry;
    if (sum > 1) {
      sum %= 2;
      carry = 1;
    } else {
      carry = 0;
    }
    ans.unshift(sum);
  }
  if (carry) ans.unshift(1);
  return ans.join("");
};

// constant space
// time complexity: O(n)
// space complexity: O(1)
var addBinary = function (a, b) {
  let ans = "",
    carry = 0;
  let i = a.length - 1,
    j = b.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--]);
    if (j >= 0) sum += parseInt(b[j--]);
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }
  return ans;
};

// one-liner
var addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
