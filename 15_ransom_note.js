/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
ransomNote and magazine consist of lowercase English letters.
*/

// https://leetcode.com/problems/ransom-note/description/

// hash table
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let map = new Map();
  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (!map.has(char) || map.get(char) === 0) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
};

// alphabet array
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let alphabet = new Array(26).fill(0);
  for (let char of magazine) {
    alphabet[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let char of ransomNote) {
    if (alphabet[char.charCodeAt(0) - "a".charCodeAt(0)] === 0) return false;
    alphabet[char.charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  return true;
};
