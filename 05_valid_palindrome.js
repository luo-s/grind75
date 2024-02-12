/*
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. 

Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// two pointers + regex
var isPalindrome = function (s) {
  // remove non-alphanumeric characters and convert to lowercase
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
