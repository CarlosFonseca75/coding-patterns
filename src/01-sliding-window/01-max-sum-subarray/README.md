# Maximum Sum Subarray of Size K

## Problem

Given an array of integers and a number `k`, find the maximum sum of any contiguous subarray of size `k`.

## Example

**Input:**

```text
numbers = [2, 1, 5, 1, 3, 2]
k = 3
```

**Output:**

```text
9
```

We need to check every contiguous subarray containing exactly `3` elements:

```text
[2, 1, 5] = 8
[1, 5, 1] = 7
[5, 1, 3] = 9
[1, 3, 2] = 6
```

The maximum sum is `9`.

## Solutions

This exercise includes two approaches:

- **Brute Force:** A straightforward, raw solution that solves the problem without applying any specific algorithmic pattern. Each subarray is processed from scratch.
- **Sliding Window:** The function that implements the Sliding Window pattern by reusing the previous window's sum, avoiding unnecessary repeated work.

The goal is to understand how the Sliding Window pattern improves the straightforward approach by reusing information from the previous window.
