/*
Design a time-based key-value data structure that can store multiple values 
for the same key at different time stamps and retrieve the key's value at a 
certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.

void set(String key, String value, int timestamp) Stores the key key with 
the value value at the given time timestamp.

String get(String key, int timestamp) Returns a value such that set was 
called previously, with timestamp_prev <= timestamp. 

If there are multiple such values, it returns the value associated with 
the largest timestamp_prev. If there are no values, it returns "".

1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 10^7
All the timestamps timestamp of set are strictly increasing.
At most 2 * 10^5 calls will be made to set and get.
*/

// https://leetcode.com/problems/time-based-key-value-store/

// store every value at all timestamps (10^7) -- out of memory quickly
// overwriting all the value after a timestamp
var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  let array = this.map.has(key)
    ? this.map.get(key)
    : new Array(10 ** 7).fill("");
  if (array[timestamp - 1] === value) return;
  for (let i = timestamp - 1; i < 10 ** 7; i++) {
    array[i] = value;
  }
  this.map.set(key, array);
};

TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return "";
  else {
    return this.map.get(key)[timestamp - 1];
  }
};

//////////////////////////////////////////////////////////////////////////////////////

/* optimized solution
array + map -- store only the timestamp and value
*/
var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, [[timestamp, value]]);
  else {
    let array = this.map.get(key);
    // if the last timestamp is the same as the current timestamp, skip update
    if (array[array.length - 1][1] === value) return;
    this.map.set(key, this.map.get(key).concat([[timestamp, value]]));
  }
};

TimeMap.prototype.get = function (key, timestamp) {
  let ans = "";
  if (!this.map.has(key)) return ans;
  else {
    let array = this.map.get(key);
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] <= timestamp) ans = array[i][1];
      else break;
    }
  }
  return ans;
};

//////////////////////////////////////////////////////////////////////////////////////
/*
best solution:
since the timestamps are strictly increasing, we can use binary search
*/

var TimeMap = function () {
  this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, [[timestamp, value]]);
  else {
    let array = this.map.get(key);
    // if the last timestamp is the same as the current timestamp, skip update
    if (array[array.length - 1][1] === value) return;
    this.map.set(key, this.map.get(key).concat([[timestamp, value]]));
  }
};

TimeMap.prototype.get = function (key, timestamp) {
  let ans = "";
  if (!this.map.has(key)) return ans;
  else {
    let array = this.map.get(key);
    if (timestamp < array[0][0]) return ans;
    else if (timestamp > array[array.length - 1][0])
      ans = array[array.length - 1][1];
    else {
      let left = 0,
        right = array.length - 1;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid][0] < timestamp) left = mid + 1;
        else right = mid;
      }
      ans = array[left][0] === timestamp ? array[left][1] : array[left - 1][1];
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i][0] <= timestamp) ans = array[i][1];
      else break;
    }
  }
  return ans;
};
