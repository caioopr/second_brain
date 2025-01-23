---
title: Coding Every Day Until I Get a Job - Day 14
description: 'Log of Coding Every Day Challenge Day 14'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode,java,MQTT,Docker'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-22 17:15:00
tags: 'challenge,daily-coding,leetcode,java,MQTT,Docker'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log
Today i finished a LeetCode problem from the [Top 150 Interview Questions](https://leetcode.com/studyplan/top-interview-150/) list and an assignment from my university.

### LeetCode 
The LeetCode exercise i chose was: Rotate Array.
It requires a function that receive as input an integer array and their `k` number of rotations to the right  rotate the array to the right by `k` steps :
> Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative. Could you do it in-place with `O(1)` extra space?

My approach was to subtract k from the array length and use the result as the number of digits in the end of the array that would be swapped with the `k` first ones, and, then, i would "sort" the ones in the beginning that now are at the end of the array. However, this solution didn't work for some test cases, due to the subtraction of `k` from the array length (when `k` > length). An alternative, that works well and can be found [here](https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150), rotates de array by reversing all item and using a new `k` value given by `k % nums.length` as a index to reverse the values before the new `k`  and then then values after the new `k`:  
```java
class Solution {
	public void rotate(int[] nums, int k) {
		// ex.: nums = [1,2,3,4,5,6,7], k = 11
		k %= nums.length; // k = 11 % 7 = 4
		
		reverse(nums, 0, nums.length - 1); // [1,2,3,4,5,6,7] -> [7,6,5,4,3,2,1]
		reverse(nums, 0, k - 1); // [7,6,5,4,3,2,1] -> [4,5,6,7,3,2,1]
		reverse(nums, k, nums.length - 1); // [4,5,6,7,3,2,1] -> [4,5,6,7,1,2,3]
	}

	private void reverse(int[] nums, int left, int right) {
		while (left < right) {
			int temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			left++;
			right--;
		}
	}
}
```
--------

### Assignments
The assignment was from the Distributed System class and it required to build a chat app using MQTTv5. It basically needed to send messages to an specified "topic" or subscribe to one. For this, the Eclipse Paho provides a publish and subscribe methods, so most part of the work was on the input string parsing.

