# -*- coding:utf-8 -*-

"""
题目描述
定义栈的数据结构，
请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））
"""

class Solution:
    def __init__(self):
        self.stackA = []
        self.stackB = []

    def push(self, node):
        self.stackA.append(node)
        if self.stackB:
            if node < self.stackB[-1]:
                self.stackB.append(node)
        else:
            self.stackB.append(node)

    def pop(self):
        if self.stackA[-1] == self.stackB[-1]:
            self.stackB.pop()
        return self.stackA.pop()

    def top(self):
        # write code here
        pass

    def min(self):
        return self.stackB[-1]


if __name__ == "__main__":
    s = Solution()
    import random
    for _ in range(10):
        s.push(random.randint(1,100))
    for _ in range(10):
        print(s.stackA)
        print(s.min())
        s.pop()

