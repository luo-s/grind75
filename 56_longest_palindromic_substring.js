/*
Given a string s, return the longest palindromic substring in s.
*/

// https://leetcode.com/problems/longest-palindromic-substring/description/

/* dynamic programming
let dp[i][j] be true if s[i:j] is a palindrome
1) if s[i] === s[j]:
  1. if j - i < 3, dp[i][j] = true
  2. if j - i >= 3, dp[i][j] = dp[i + 1][j - 1]
2) if s[i] !== s[j], dp[i][j] = false
*/
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let dp = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false));
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};

// center spread
var longestPalindrome = function (s) {
  if (s.legnth <= 2) return s;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    centerSpread(i, i);
    centerSpread(i, i + 1);
  }
  function centerSpread(start, end) {
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      start--;
      end++;
    }
    if (end - start - 1 > res.length) {
      res = s.slice(start + 1, end);
    }
  }
  return res;
};
