---
title: Coding Every Day Until I Get a Job - Day 2
description: 'Log of Coding Every Day Challenge Day 2'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-08 17:15:00
tags: 'challenge,daily-coding,leetcode'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log

Today i decided to solve a LeetCode exercise.

### LeetCode

The LeetCode exercise i chose today was: Longest Common Prefix.
It requires a function that receive as input an array of strings to return the longest common prefix between them:

> Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.

My first approach to achieve this was to start a empty prefix string; sort the array by using the length of the strings; make a nested loop with the more external one being used to get the chars of the first string (the smallest one) of the array and the internal one to verify if that char exists in every other string in the array; add the char to the prefix string. However, it was way to slow (3 ms to finish).

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {

        String prefix = "";

        if(strs.length == 1 ) return strs[0];

        boolean isIn = true;

        Arrays.sort(strs, Comparator.comparingInt(String::length));
        for(int i=0; i < strs[0].length() && isIn == true; i++){
            for(int j=1; j < strs.length; j++){

                if(strs[0].charAt(i) != strs[j].charAt(i)){
                    isIn = false;
                    break;
                }
            }
            if(isIn == true){
                prefix = prefix.concat(String.valueOf(strs[0].charAt(i)));
            }
        }
        return prefix;
    }
}
```

So i removed the array sorting and added a check to the if statement inside the more internal nested loop, but it was still taking 2 ms to finish.

```java
// ...
// internal loop
for(int j=1; j < strs.length; j++){
	// changes here:
	if(i >= strs[j].length() || (i < strs[j].length() && strs[0].charAt(i) != strs[j].charAt(i))){
		isIn = false;
	    break;
	}
}
// ...
```

Then i found an alternative, with 0 ms of runtime and fewer lines of code that starts with the first string as the prefix and loops through the rest of the array, verifying if the prefix exists in each string, and, if it doesn't, it pops the last character of the prefix and compares again with the same string until the prefix is in the string or it becomes an empty string. This solution can be found [here](https://leetcode.com/problems/longest-common-prefix/solutions/4182958/java-c-python-beats-100-beginner-s-friendly/).

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {

        if (strs == null || strs.length == 0) return "";
        String prefix = strs[0];

        for(int i = 1; i < strs.length; i++){
            while (strs[i].indexOf(prefix) != 0)
                prefix = prefix.substring(0, prefix.length() - 1);
        }
        return prefix;
    }
}
```
