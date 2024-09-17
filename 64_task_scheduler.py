# You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

# ​Return the minimum number of intervals required to complete all tasks.

# https://leetcode.com/problems/task-scheduler/

from collections import Counter
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # Step 1: Count the frequency of each task
        task_count = Counter(tasks)
        max_task_freq = max(task_count.values())  # Maximum frequency of any task
        max_count = list(task_count.values()).count(max_task_freq)  # Number of tasks with max frequency

        # Step 2: Calculate the minimum intervals required
        part_count = max_task_freq - 1  # Number of parts (without the last max-frequency task)
        part_length = n + 1  # Each part can hold 'n' idle slots + 1 max frequency task
        empty_slots = part_count * part_length  # Total slots if no other task fills the gaps

        # Step 3: Calculate the result considering idle slots and task overlap
        total_required_time = empty_slots + max_count  # Add the last part filled with max_count tasks
        return max(total_required_time, len(tasks))  # Return the maximum between total time or the length of tasks

# same thing without advanced DS
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        cnts = [0] * 26
        for c in tasks:
            cnts[ord(c) - ord('A')] += 1
        max_freq, tot = 0, 0
        for i in range(26):
            max_freq = max(max_freq, cnts[i])
        for i in range(26):
            tot += 1 if max_freq == cnts[i] else 0
        return max(len(tasks), (n + 1) * (max_freq - 1) + tot)
