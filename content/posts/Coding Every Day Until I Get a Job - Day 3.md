---
title: Coding Every Day Until I Get a Job - Day 3
description: 'Log of Coding Every Day Challenge Day 3'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode,nuxt.js'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-09 17:15:00
tags: 'challenge,daily-coding,leetcode,nuxt.js'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log

Today i decided to solve a LeetCode exercise and continue to work `second_brain` side project open issues.

### LeetCode

The LeetCode exercise i chose today was: Roman to Integer.
It requires a function that receives a string roman numeral as input to return the conversion of this roman numeral to an integer :

> Given a roman numeral, convert it to an integer.

To achieve this, i had associate each roman numeral character to an actual integer and then loop through each character of the input string "retrieving" the integer, so i could add or subtract of a `num` integer variable created to store the converted result. At first, i initialized the roman character-integer link using an java Map, but, just as i was already predicting, it would take too much runtime; and it did(7 ms).

```java
class Solution {
    public int romanToInt(String s) {
        Map<Character,Integer> numMap = Map.of(
            'I', 1,
            'V', 5,
            'X', 10,
            'L', 50,
            'C', 100,
            'D', 500,
            'M',1000
        );

        int result = 0;

        for(int i = 0; i< s.length(); i++){
            int num = numMap.get(s.charAt(i));
            if(i < s.length()-1){
                if (num == 1 && "VX".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }

                else if (num == 10 && "LC".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }
                else if (num == 100 && "DM".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }
            }

            result += num;

        }
        return result;
    }
}
```

The alternative was to use a switch statement to link the roman numerals characters to integers, and it worked so well that the runtime dropped to 2 ms.

```java
class Solution {
    public int romanToInt(String s) {

        int result = 0;

        for(int i = 0; i< s.length(); i++){
            int num = s.charAt(i);
            switch(num){
                case 'I':
                    num = 1;
                    break;
                case 'V':
                    num = 5;
                    break;
                case 'X':
                    num = 10;
                    break;
                case 'L':
                    num = 50;
                    break;
                case 'C':
                    num = 100;
                    break;
                case 'D':
                    num = 500;
                    break;
                case 'M':
                    num =1000;
                    break;
                default: num = 0;
            }

            if(i < s.length()-1){
                if (num == 1 && "VX".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }

                else if (num == 10 && "LC".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }
                else if (num == 100 && "DM".indexOf(s.charAt(i+1)) != -1){
                    result -= num;
                    continue;
                }
            }
            result += num;
        }
        return result;
    }
}
```

---

### Side Project

On my {Second Brain](https://github.com/caioopr/second_brain) project, i worked on the "Collections" page to display the list of existing collections; however, i still need to implement the actual functionality to show the posts of a collection.
