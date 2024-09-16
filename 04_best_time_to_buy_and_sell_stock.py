# You are given an array prices where prices[i] is the price of a given stock 
# on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock 
# and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. 
# If you cannot achieve any profit, return 0.

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
# advanced LC 53 Maximum Subarray https://leetcode.com/problems/maximum-subarray/

# brute force solution
# time complexity: O(n^2)
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0
        for i in range(len(prices)-1):
            for j in range(i+1, len(prices)):
                max_profit = max(max_profit, prices[j] - prices[i])
        return max_profit 
    
# simplify: tracking min price, max price, and max profit 
# time complexity: O(n)
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit, min_index, max_index = 0, 0, 0
        for i in range(1, len(prices)):
            if prices[i] > prices[max_index]:
                max_index = i
                max_profit = max(max_profit, prices[max_index] - prices[min_index])
            elif prices[i] < prices[min_index]:
                min_index, max_index = i, i
        return max_profit
    
# simplify: tracking min_price and max_profit
# time complexity: O(n)
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit, cur_min = 0, float('inf')
        for price in prices:
            cur_min = min(cur_min, price)
            max_profit = max(max_profit, price - cur_min)
        return max_profit