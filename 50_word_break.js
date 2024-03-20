/*
Given a string s and a dictionary of strings wordDict, return true if s can 
be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in 
the segmentation.
*/

// https://leetcode.com/problems/word-break/description/

// dfs -- overflows call stack
var wordBreak = function (s, wordDict) {
  for (let word of wordDict) {
    if (s.startsWith(word)) {
      let newS = s.slice(word.length);
      if (newS.length === 0 || wordBreak(newS, wordDict)) return true;
    }
  }
  return false;
};

// dfs with memoization
var wordBreak = function (s, wordDict) {
  let memo = new Map();
  var dfs = function (s) {
    if (memo.has(s)) return memo.get(s);
    for (let word of wordDict) {
      if (s.startsWith(word)) {
        let newS = s.slice(word.length);
        if (newS.length === 0 || dfs(newS)) {
          memo.set(s, true);
          return true;
        }
      }
    }
    memo.set(s, false);
    return false;
  };
  return dfs(s);
};
