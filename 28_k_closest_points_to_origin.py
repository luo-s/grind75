# Given an array of points where points[i] = [xi, yi] represents a point on 
# the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance 
# (i.e., ((x1 - x2)^2 + (y1 - y2)^2)^(0.5)).

# You may return the answer in any order. 
# The answer is guaranteed to be unique (except for the order that it is in).

# https://leetcode.com/problems/k-closest-points-to-origin/

# priority queue
# python built-in module: heapq https://docs.python.org/3/library/heapq.html
# heapq.heapify(list) (turn list into a heap)
# heapq.heappush(heap, item)
# heapq.heappop(heap) (always pop the smallest element)
import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for (x, y) in points:
            distance = -(x * x + y * y)
            heapq.heappush(heap, (distance, [x, y]))
            if len(heap) > k:
                heapq.heappop(heap)
        return [point for _, point in heap]

# quick select
import random
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        def distance(point):
            return point[0]**2 + point[1]**2

        def quickselect(left, right, k):
            # Choose a random pivot to avoid worst-case performance
            pivot_idx = random.randint(left, right)
            points[pivot_idx], points[right] = points[right], points[pivot_idx]

            # Partition the array around the pivot
            pivot = distance(points[right])
            i = left
            for j in range(left, right):
                if distance(points[j]) < pivot:
                    # swap the closest points to left
                    points[i], points[j] = points[j], points[i]
                    i += 1
            # swap the pivot point
            points[i], points[right] = points[right], points[i]

            # If we have exactly k points on the left, stop here
            if i == k:
                return
            # if we have less than k points on the left, keep quick select right portion 
            elif i < k:
                quickselect(i + 1, right, k)
            # if we have more than k points on the left, keep quick select left portion
            else:
                quickselect(left, i - 1, k)

        quickselect(0, len(points) - 1, k)
        return points[:k]
