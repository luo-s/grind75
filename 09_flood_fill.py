# An image is represented by an m x n integer grid image where image[i][j] 
# represents the pixel value of the image.

# You are also given three integers sr, sc, and color. You should perform a 
# flood fill on the image starting from the pixel image[sr][sc].

# To perform a flood fill, consider the starting pixel, plus any pixels connected 
# 4-directionally to the starting pixel of the same color as the starting pixel, 
# plus any pixels connected 4-directionally to those pixels (also with the 
# same color), and so on. Replace the color of all of the aforementioned 
# pixels with color.

# Return the modified image after performing the flood fill.

# https://leetcode.com/problems/flood-fill/

# DFS (depth-first search) approach: recursive fill
class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, newColor: int) -> list[list[int]]:
        startColor = image[sr][sc]
        if startColor == newColor:
            return image
        self.fill(image, sr, sc, startColor, newColor)
        return image
    # Helper function to pass the startColor
    def fill(self, image, r, c, startColor, newColor):
        # base case
        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != startColor:
            return
        # recursive case
        # change the color of the current pixel
        image[r][c] = newColor
        # keep filling in all 4 directions
        self.fill(image, r + 1, c, startColor, newColor)
        self.fill(image, r - 1, c, startColor, newColor)
        self.fill(image, r, c + 1, startColor, newColor)
        self.fill(image, r, c - 1, startColor, newColor)

# BFS (breadth-first search) approach: use a queue to manage call-stack, no recursion
class Solution:
    def floodFill(self, image: list[list[int]], sr: int, sc: int, newColor: int) -> list[list[int]]:
        startColor = image[sr][sc]
        if startColor == newColor:
            return image
        queue = [(sr, sc)]
        while queue:
            r, c = queue.pop(0)
            if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != startColor:
                continue
            image[r][c] = newColor
            queue.append((r + 1, c))
            queue.append((r - 1, c))
            queue.append((r, c + 1))
            queue.append((r, c - 1))
        return image