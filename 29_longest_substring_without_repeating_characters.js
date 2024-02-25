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

// sliding window
// time complexity: O(n)
// space complexity: O(n)
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    max = 0,
    map = new Map();
  while (right < s.length) {
    // if no repeating characters
    if (!map.has(s[right])) {
      map.set(s[right], right);
      max = Math.max(max, map.size);
    } else {
      // if repeating characters
      while (left <= map.get(s[right])) {
        map.delete(s[left]);
        left++;
      }
      map.set(s[right], right);
    }
    right++;
  }
  return max;
};

// optimized sliding window
// time complexity O(n)
// space complexity O(n)
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < s.length) {
    // if no repeating characters
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      right++;
      max = Math.max(max, chars.size);
    } else {
      // if repeating characters
      chars.delete(s[left]);
      left++;
    }
  }
  return max;
};
