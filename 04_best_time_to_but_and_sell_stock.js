/*
You are given an array prices where prices[i] is the price of a given stock 
on the ith day.

You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
*/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// brute force
// time complexity O(n^2)
// space complexity O(1)
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
};

// time complexity O(n)
// space complexity O(1)
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  // loop through the array
  for (let i = 1; i < prices.length; i++) {
    // update the minPrice
    min = Math.min(minPrice, prices[i]);
    // update the maxProfit
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
