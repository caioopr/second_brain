---
title: Code Log - Day 10
description: 'Code Log Day 10'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-16 17:15:00
tags: 'challenge,daily-coding,leetcode'
collections: 'Code Log'
toc: true
---

# {{$doc.title}}

## Log

Today i solved a LeetCode exercise from the [Top 150 Interview Questions](https://leetcode.com/studyplan/top-interview-150/) list and worked on an assignment from my university.

### LeetCode

The LeetCode exercise i chose was: Remove Duplicates from Sorted Array II.
It requires a function that receive as input an integer array to remove in-place the numbers that already appeared more than two times and return the number of numbers left:

> Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates in-place such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**. ... the first `k` elements of `nums` should hold the final result. Return `k` after placing the final result in the first `k` slots of `nums`.

The solution was basically the same as the `Remove Duplicates from Sorted Array I`, but with a number appearance count check:

```java
class Solution {

public int removeDuplicates(int[] nums) {

	if (
		nums.length < 1 ||
		nums.length > 30000 ||
		nums[0] < -100 ||
		nums[nums.length - 1] > 100
	) return 0;


	// starts with both idx 1 because the minimum arr.len is 1
	// and the comparison must be done using the previous number
	int len = 1;
	int dups = 0;

	for (int i = 1; i < nums.length; i++) {

		// compare i with i-1
		if (nums[i] != nums[i - 1]) {
			// nums[len] is the number after the last unique number
			nums[len] = nums[i];
			dups = 0;
			len++;
		} else if(nums[i] == nums[i - 1] && dups < 1){
			nums[len] = nums[i];
			dups++;
			len++;
		}

	}
	return len;
	}
}
```

### Assignments

I finished the assignment from the Machine Learning class, where i had to demonstrate how to make a symbolic-numeric attribute conversion with python. To be more specific, the one that was missing is the symbolic-numeric attribute using pseudo-attributes, so i made a python dictionary with an unique data combination for each author, and then i mapped these objects to the pandas data frame.
