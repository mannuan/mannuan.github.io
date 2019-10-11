# -*- coding:utf-8 -*-

"""
题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
"""

class Solution:
    def Fibonacci(self, n):
        # write code here
        f = 1
        g = 0
        for _ in range(n):
            g = g + f
            f = g - f
        return g


if __name__ == "__main__":
    s = Solution()
    print(s.Fibonacci(4))