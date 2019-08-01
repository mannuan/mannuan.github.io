# -*- coding:utf-8 -*-

"""
题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
注意：
因为python的int是无线精度的，c++的int是32为的，所以python的负数相当于前面有无限个1，要对python的负数做处理
"""
import sys
class Solution:
    def NumberOf1(self, n):
        # write code here
        # return bin(n).count('1')
        num = 0
        n = n & 0xffffffff
        while n != 0:
            num += 1
            n = n & (n-1)
        return num
        
if __name__ == "__main__":
    s = Solution()
    print(s.NumberOf1(-9))