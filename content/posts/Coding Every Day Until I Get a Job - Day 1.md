---
title: Coding Every Day Until I Get a Job - Day 1
description: 'Log of Coding Every Day Challenge Day 1'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode,nuxt.js'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-07 17:15:00
tags: 'challenge,daily-coding,leetcode,nuxt.js'
toc: true
---

# {{$doc.title}}

## Log

Today i decided to solve a LeetCode exercise and work on a side project open issues.

### LeetCode

Since there is a bit of time from the last time i solved a LeetCode exercise a chose easy one: Remove Element.
It requires a function that receive as input an array of integers numbers and a value to remove all occurrences of the value "in-place" and to return the number of the elements in the array that are not equal to the value:

> Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.

My first approach to achieve this was to put the elements that are equal at the end of the `nums` array. However, since the only thing that actually matters is the first `k` elements, this solution ends up not being the best one.

```java
class Solution {
    public int removeElement(int[] nums, int val) {

        int val_occurrences = 0;
	    int nums_len = nums.length - 1;
        for(int i=0, j=nums_len ; i<=j ;i++){
            if(nums[i] == val){
                while(i!=j && nums[j] == val){
                   val_occurrences++;
                    j--;
                }
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                val_occurrences++;
                j--;

            }
        }
        return nums.length - val_occurrences;
    }
}
```

An alternative and better approach, with 0.2 MB less memory usage compared with the first solution, only worry about placing the different values together at the beginning of `nums` by keeping an index/count to these values, and can be found [here](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/).

```java
class Solution {
    public int removeElement(int[] nums, int val) {

        int last_diff_val = 0;
        for(int i = 0; i<nums.length; i++){
            if(nums[i] != val){
                nums[last_diff_val] = nums[i];
                last_diff_val++;
            }
        }

		/*
		// this ways has a more clean read but uses more memory
		for(int num_i : nums){
            if(num_i != val){
                nums[last_diff_val] = num_i;
                last_diff_val++;
            }
        }
		*/

        return last_diff_val;
    }
}
```

---

### Side Project

I decided to work on my {Second Brain](https://github.com/caioopr/second_brain) project open issues. The issue i closed today was the "Projects page" one, where i had to finish the implementation of a page that display links to my projects description pages, just like the "Posts" page but for projects.
In this project, because i'm using Nuxt.js with the module Nuxt Content, it's really easy to add new pages and sub-pages, just like for the posts and post page it was enough to: add a folder `projects` at `/pages/` and at `/content`; create an `index.md` file at `/content/projects` and define the component that will display the projects list with `::component-name`; create a `[...slug].vue` file at `/pages/projects` and define the code responsible to render the single project page when accessing `/projects/project_name` in the browser.
The "Projects page" is already working. However , i'll probably be changing the design of the projects list item in the future, maybe add card style with a image preview.
