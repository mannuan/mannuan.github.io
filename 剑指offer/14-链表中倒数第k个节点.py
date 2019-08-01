# -*- coding:utf-8 -*-

"""
题目描述
输入一个链表，输出该链表中倒数第k个结点。
"""

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def FindKthToTail(self, head, k):
        """
        普通方法
        时间复杂度：O(n)
        空间复杂度：O(n)
        """
        if not head or k < 1:
            return None
        arr = []
        while head:
            arr.append(head)
            head = head.next
        if k > len(arr):
            return None
        return arr[-k]

    def FindKthToTail1(self, head, k):
        """
        只遍历链表一次
        时间复杂度：O(n)
        空间复杂度：O(1)
        边界条件需要注意
        """
        if not head or k < 1:
            return None
        p1 = head
        p2 = head
        for _ in range(k-1):
            if(p1.next):
                p1 = p1.next
            else:
                return None
        while p1.next: # 这里如果使用p1，就会发生p1指向None的情况
            p1 = p1.next
            p2 = p2.next
        return p2


if __name__ == "__main__":
    head = ListNode(0)
    pre = head
    for i in range(1, 6):
        next = ListNode(i)
        pre.next = next
        pre = next
    s = Solution()
    p = s.FindKthToTail1(head, 3)
    print(p.val)
