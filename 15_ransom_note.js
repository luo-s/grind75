/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// https://leetcode.com/problems/ransom-note/description/

// hash table
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    let map = new Map();
    for (let char of ransomNote) {
        map.set(char, map.get(char) || 0 + 1);
    }
    for (let char of magazine) {
        if (!map.has(char)) return false;
        else {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) map.delete(char);
        }
    }
    return true;
};