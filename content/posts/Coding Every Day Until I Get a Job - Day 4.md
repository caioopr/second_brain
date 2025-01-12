---
title: Coding Every Day Until I Get a Job - Day 4
description: 'Log of Coding Every Day Challenge Day 4'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,leetcode'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-10 17:15:00
tags: 'challenge,daily-coding,leetcode'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log

Today i only solved a LeetCode exercise.

### LeetCode

The LeetCode exercise i chose today was: Remove Duplicates from Sorted List.
It requires a function that receives the head of a linked list as input to remove the duplicates and return the list sorted:

> Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list **sorted** as well.

To achieve this, i simply went through the linked list verifying if the current node had the same value of the next node, and, if they had the same value, the current node next node would now be the next node of the next node. Since i'm using java, i didn't need to free the memory occupied by the removed node because the garbage collector takes care of it.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;

        ListNode aux = head;
        while(head.next != null){
            if(head.val == head.next.val){
                head.next = head.next.next;
            } else {
                head = head.next;
            }
        }

        return aux;
    }
}
```
