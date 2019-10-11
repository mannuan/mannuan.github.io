# -*- coding:utf-8 -*-

"""
题目描述
一只青蛙一次可以跳上1级台阶，
也可以跳上2级……它也可以跳上n级。
求该青蛙跳上一个n级的台阶总共有多少种跳法。
f(1) = 1
f(2) = 2
f(3) = 4
f(4) = 8
2^(n-1)
"""

class Solution:
    def jumpFloorII(self, number):
        # write code here
        if number == 0:
            return number
        return 1 << (number - 1)
        