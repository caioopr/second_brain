---
title: Coding Every Day Until I Get a Job - Day 9
description: 'Log of Coding Every Day Challenge Day 9'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-15 17:15:00
tags: 'challenge,daily-coding,leetcode'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log
Today i solved a LeetCode exercise from the [Top 150 Interview Questions](https://leetcode.com/studyplan/top-interview-150/) list.

### LeetCode 
The LeetCode exercise i chose was: Merge Sorted Array.
It requires a function that receive as input two integer arrays and their the number of occupied positions in each of them to merge the arrays into the first array, which has `m` items and length of `m + n`, with `n` being the length of the second array :
> You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. **Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**. ...with an algorithm that runs in `O(m + n)` time?

My first approach was to create a new array `merge` and then loop through `nums1` and `nums2` comparing their items to insert into the `merge` array in a non-decreasing order; after this, the items in the `merge` would get stored into `nums1`:
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        if ((m == 0 && n == 0) || (m != 0 && n==0) ) return;
        if (m == 0 && n != 0) {
            for(int i = 0; i < nums1.length; i++)
                nums1[i] = nums2[i]; 
            return;
        }  

        int[] merged = new int[nums1.length];
        int j = 0; // nums1 index
        int k = 0; // nums2 index

        for(int i = 0; i < nums1.length; i++){
           if(j < m && k < n){
                if(nums1[j] <= nums2[k]){
                    merged[i] = nums1[j];
                    j++;
                    continue;
                } else {
                    merged[i] = nums2[k];
                    k++;
                    continue;
                }
           } else if(j < m && k == n) {
                merged[i] = nums1[j];
                j++;
                continue;
           } else if(j == m && k < n) {
                merged[i] = nums2[k];
                k++;
                continue;
           }

        }
        for(int i = 0; i < nums1.length; i++)
            nums1[i] = merged[i];
    }
}
```
This works, but there are too many lines of code and there is the need of an extra array. So i found this solution where it takes advantage of the fact that both of the arrays are sorted and the items can easily be inserted at the end of `nums1`. It can be found [here](https://leetcode.com/problems/merge-sorted-array/solutions/3436053/beats-100-best-c-java-python-and-javascript-solution-two-pointer-stl/?envType=study-plan-v2&envId=top-interview-150).
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;                              // tracks nums1 items index
        int j = n - 1;                              // tracks nums2 items index
        int k = m + n - 1;                          // tacks next index to insert at nums1
        
        while (j >= 0) {                            // finished looping through nums2?
			                                        // nums1 m items still need to get checked
			                                        // and item at nums1[i] bigger than nums2[j] 
            if (i >= 0 && nums1[i] > nums2[j]) { 
											        // moves the item at nums1[i] to nums1[k]
												    // decrement k and i by 1
                nums1[k--] = nums1[i--];
            } else {                                // nums1 0 items need to get checked
													// moves the item at nums2[j] to nums1[k]
												    // decrement k and j by 1
                nums1[k--] = nums2[j--];
            }
        }
    }
}
```

