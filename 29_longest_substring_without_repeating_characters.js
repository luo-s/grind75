/*
Given a string s, find the length of the longest substring without 
repeating characters.
*/

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// brute force -- time limit exceeded
// time complexity: O(n^3)
// space complexity: O(n)
var lengthOfLongestSubstring = function (s) {
  var allUnique = function (s, start, end) {
    let set = new Set();
    let str = s.substring(start, end);
    for (let char of str) {
      if (set.has(char)) {
        return false;
      }
      set.add(char);
    }
    return true;
  };
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (allUnique(s, i, j)) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
};
