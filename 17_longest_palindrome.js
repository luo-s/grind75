/*
Given a string s which consists of lowercase or uppercase letters, return 
the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a 
palindrome here.

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

// https://leetcode.com/problems/longest-palindrome

// hash map solution
var longestPalindrome = function (s) {
  let max = 0;
  // construct a dictionary of the characters in the string
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  // iterate through the dictionary and add the number of pairs of characters
  for (let [key, value] of map.entries()) {
    max += Math.floor(value / 2) * 2;
  }
  // if there are any characters left, add one to the max (the middle of the palindrome)
  for (let [key, value] of map.entries()) {
    if (value % 2 === 1) {
      max++;
      break;
    }
  }
  return max;
};
