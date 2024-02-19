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
  let map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let value of map.values()) {
    max += Math.floor(value / 2) * 2;
  }
  for (let value of map.values()) {
    if (value % 2 === 1) {
      max++;
      break;
    }
  }
  return max;
};
