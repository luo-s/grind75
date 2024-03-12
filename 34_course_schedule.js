/*
There are a total of numCourses courses you have to take, labeled from 
0 to numCourses - 1. You are given an array prerequisites where 
prerequisites[i] = [ai, bi] indicates that you must take course bi first 
if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to 
first take course 1.
Return true if you can finish all courses. Otherwise, return false.

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

// https://leetcode.com/problems/course-schedule/

// check cycle in directed graph (Directed Acyclic Graph)
// brute force -- time limit exceeded
// time complexity: O(n * m)
// space complexity: O(n)
var canFinish = function (numCourses, prerequisites) {
  var isCyclic = function (course, visited = new Set()) {
    if (visited.has(course)) return true;
    if (!map.has(course)) return false;
    for (let pre of map.get(course)) {
      visited.add(course);
      if (isCyclic(pre, visited)) return true;
      visited.delete(course);
    }
  };
  let map = new Map();
  for (let [course, pre] of prerequisites) {
    if (map.has(course)) {
      map.get(course).push(pre);
    } else {
      map.set(course, [pre]);
    }
  }
  for (let [course, pre] of prerequisites) {
    if (isCyclic(course)) return false;
  }
  return true;
};
