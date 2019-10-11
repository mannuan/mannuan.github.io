# -*- coding:utf-8 -*-

"""
题目描述
一只青蛙一次可以跳上1级台阶，
也可以跳上2级。
求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
这是一个斐波那契数列
"""

class Solution:
    def jumpFloor(self, number):
        if number == 0:
            return number
        f = 1
        g = 1 
        for _ in range(number-1):
            g = g + f
            f = g - f
        return g