# -*- coding:utf-8 -*-

"""
题目描述
输入两个单调递增的链表，输出两个链表合成后的链表，
当然我们需要合成后的链表满足单调不减规则。
"""

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # 返回合并后列表
    def Merge(self, pHead1, pHead2):
        if not pHead1 and pHead2:
            return pHead2
        elif pHead1 and not pHead2:
            return pHead1
        elif not pHead1 and not pHead2:
            return None
        head = None
        if pHead1.val <= pHead2.val:
            head = pHead1
            pHead1 = pHead1.next
        else:
            head = pHead2
            pHead2 = pHead2.next
        p = head
        while pHead1 and pHead2:
            if pHead1.val <= pHead2.val:
                p.next = pHead1
                pHead1 = pHead1.next
            else:
                p.next = pHead2
                pHead2 = pHead2.next
            p = p.next
        p.next = pHead1 if pHead1 else pHead2
        return head


if __name__ == "__main__":
    import random
    arr1 = [random.randint(1, 100) for i in range(5)]
    arr1.sort()
    pHead1 = ListNode(arr1[0])
    p1 = pHead1
    for i in arr1[1:]:
        p1.next = ListNode(i)
        p1 = p1.next

    arr2 = [random.randint(1, 100) for i in range(5)]
    arr2.sort()
    pHead2 = ListNode(arr2[0])
    p2 = pHead2
    for i in arr2[1:]:
        p2.next = ListNode(i)
        p2 = p2.next

    s = Solution()
    head = s.Merge(pHead1, pHead2)
    print(arr1)
    print(arr2)
    arr3 = []
    while head:
        arr3.append(head.val)
        head = head.next
    print(arr3)