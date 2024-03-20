/*
Given a list of accounts where each element accounts[i] is a list of strings, 
where the first element accounts[i][0] is a name, and the rest of the elements 
are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong 
to the same person if there is some common email to both accounts. 
Note that even if two accounts have the same name, they may belong to 
different people as people could have the same name. A person can have any 
number of accounts initially, but all of their accounts definitely have the 
same name.

After merging the accounts, return the accounts in the following format: 
the first element of each account is the name, and the rest of the elements 
are emails in sorted order. 

The accounts themselves can be returned in any order.

1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.
*/

// https://leetcode.com/problems/accounts-merge/description/

// merge, remove duplicates, and sort -- time limit exceeded
var accountsMerge = function (accounts) {
  var hasSeen = function (result, name) {
    let accountIndex = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] === name) {
        accountIndex.push(i);
      }
    }
    return accountIndex.length > 0 ? accountIndex : false;
  };
  var hasCommonEmail = function (account1, account2) {
    for (let i = 1; i < account1.length; i++) {
      for (let j = 1; j < account2.length; j++) {
        if (account1[i] === account2[j]) {
          return true;
        }
      }
    }
    return false;
  };
  var removeDuplicates = function (arr) {
    // map guarantees order, set does not
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (map.has(arr[i])) continue;
      else map.set(arr[i], i);
    }
    return Array.from(map.keys());
  };
  var merge = function (index1, index2) {
    result[index1] = result[index1].concat(result[index2]);
    result.splice(index2, 1);
  };
  let result = [];
  for (let account of accounts) {
    if (result.length === 0) {
      // push the first account
      result.push(account);
    } else if (hasSeen(result, account[0]) === false) {
      // if the name is not in the result, push the account
      result.push(account);
    } else {
      // if the name is in the result
      let index = hasSeen(result, account[0]);
      let newPerson = true;
      // if common email presents, merge
      for (let i of index) {
        if (hasCommonEmail(result[i], account)) {
          result[i] = result[i].concat(account);
          newPerson = false;
        }
      }
      // after merging the new account, check common emails for existing accounts
      if (index.length > 1 && newPerson === false) {
        let left = 0,
          right = index.length - 1;
        while (left < right) {
          if (hasCommonEmail(result[index[left]], result[index[right]])) {
            merge(index[left], index[right]);
          }
          right--;
        }
      }
      // if no common email, push the account
      if (newPerson) {
        result.push(account);
      }
    }
  }
  // remove duplicates
  result.forEach((ele, index) => {
    result[index] = removeDuplicates(ele);
  });
  // sort
  result.forEach((ele, index) => {
    result[index] = [ele[0], ...ele.slice(1).sort()];
  });
  return result;
};
