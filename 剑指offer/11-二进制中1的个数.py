# -*- coding:utf-8 -*-

"""
题目描述
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
"""

class Solution:
    def NumberOf1(self, n):
        # write code here
        return bin(n).replace('-', '1').count('1')
        
        
if __name__ == "__main__":
    s = Solution()
    print(s.NumberOf1(128))