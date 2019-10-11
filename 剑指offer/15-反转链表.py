# -*- coding:utf-8 -*-

"""
题目描述
输入一个链表，反转链表后，输出新链表的表头。
"""

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
    
class Solution:
    # 返回ListNode
    def ReverseList(self, pHead):
        """
        普通方法
        时间复杂度：O(n)
        空间复杂度：O(n)
        """
        if not pHead or not pHead.next:
            return pHead
        p1 = pHead
        p2 = None
        while p1:
            save = p1.next
            p1.next = p2
            p2 = p1
            p1 = save
        return p2


if __name__ == "__main__":
    head = ListNode(0)
    pre = head
    for i in range(1, 2):
        next = ListNode(i)
        pre.next = next
        pre = next
    s = Solution()
    p = s.ReverseList(head)
    while p.next:
        print(p.val)