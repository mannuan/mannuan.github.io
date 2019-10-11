# -*- coding:utf-8 -*-

"""
题目描述
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
并保证奇数和奇数，偶数和偶数之间的相对位置不变。
"""

class Solution:
    def reOrderArray(self, array):
        """
        我的本能写出的方法
        时间复杂度：O(n)
        空间复杂度：O(n)
        缺点：如果遇到大数组，会占用大量的内存
        优点：时间复杂度较小
        """
        # write code here
        ou_arr = []
        ji_arr = []
        for i in array:
            if i & 1:
                ji_arr.append(i)
            else:
                ou_arr.append(i)
        return ji_arr + ou_arr

    def reOrderArray1(self, array):
        """
        剑指offer中提出的一般的方法
        时间复杂度：每次遇到偶数的时候都要把它放到数组的末尾，粗略估计每次要移动n次，因此时间复杂度为O(n)
        空间复杂度：O(0)
        缺点：耗时太长
        优点：不需要额外的空间
        """
        arr_len = len(array)
        i = 0
        for _ in range(arr_len):
            if array[i] & 1 == 0:
                array.append(array.pop(i))
            else:
                i += 1
        return array

    def reOrderArray2(self, array):
        """
        剑指offer中提出的优化的方法
        """
        # 有没有更快的方法


if __name__ == "__main__":
    s = Solution()
    print(s.reOrderArray2([1,2,3,4,5,4,4,4,4,4]))
    
