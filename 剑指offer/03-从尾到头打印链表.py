# -*- coding:utf-8 -*-

"""
题目描述
输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
"""

# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # 返回从尾部到头部的列表值序列，例如[1,2,3]
    def printListFromTailToHead(self, listNode):
        # write code here
        arr = []
        if not listNode:
            return []
        else:
            arr.append(listNode.val)
        while listNode.next:
            listNode = listNode.next
            arr.append(listNode.val)
        return arr[::-1]