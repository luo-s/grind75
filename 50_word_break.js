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

/* dynamic programming
let dp[i] be true if s[0:i] can be segmented into words in wordDict
dp[i] = dp[j] && wordDict.includes(s[j:i-1]) for all j in [0, i-1]
*/
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  // loop through s[0:i]
  for (let i = 1; i <= s.length; i++) {
    // divide s[0:i] into two parts: s[0:j] and s[j:i-1]
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
