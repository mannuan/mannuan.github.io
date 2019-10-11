# -*- coding:utf-8 -*-

"""
题目描述
给定一个double类型的浮点数base和int类型的整数exponent。
求base的exponent次方。
"""

class Solution:
    def eachPower(self, base, exponent):
        """
        幂指数普通做法
        """
        result = 1
        for _ in range(abs(exponent)):
            result *= base
        return result
    
    def eachPower1(self, base, exponent):
        """
        幂指数快速算法：
        假设result=1，
        每一次循环：
            遇到偶数就使得：
                指数/=指数，底数*=底数；
            遇到奇数就使得：
                指数-=1，result*=底数；
        """
        result = 1
        while exponent:
            if(exponent % 2 == 0):
                exponent /= 2
                base *= base
            else:
                exponent -= 1
                result *= base
        return result

    def eachPower2(self, base, exponent):
        """
        局部进行优化，减少判断操作
        """
        result = 1
        while exponent:
            if exponent % 2 == 1:
                result *= base
            exponent //= 2 # 整除2
            base *= base
        return result

    def eachPower3(self, base, exponent):
        """
        使用位运算
        """
        result = 1
        while exponent:
            if exponent & 1:
                result *= base
            exponent >>= 1
            base *= base
        return result

    def Power(self, base, exponent):
        # write code here
        if base > -0.00000001 and base < 0.00000001:
            return 0
        if exponent == 0:
            return 1
        result = self.eachPower3(base, abs(exponent))
        if exponent > 0:
            return result
        else:
            return 1.0/result


if __name__ == "__main__":
    s = Solution()
    print(s.Power(3, 10))

