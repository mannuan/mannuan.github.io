# -*- coding:utf-8 -*-

"""
题目描述
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，
总共有多少种方法？
f(1) = 1
f(2) = 2
f(3) = 3
f(4) = 5
f(5) = 8
"""

class Solution:
    def rectCover(self, number):
        # write code here
        if number == 0:
            return number
        f = 1
        g = 1
        for _ in range(number-1):
            g = g + f
            f = g - f
        return g