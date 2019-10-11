# -*- coding: utf-8 -*- 

"""
题目描述
在一个二维数组中（每个一维数组的长度相同），
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，
输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数。
"""

class Solution:
    def Find(self, target, array):
        """
        从左下角开始遍历
        """
        row_num = len(array)
        col_num = len(array[0])
        i = row_num - 1
        j = 0
        while i >= 0 and j <= col_num-1:
            if target < array[i][j]:
                i -= 1
            elif target > array[i][j]:
                j += 1
            else:
                return True
        return False

    def Find1(self, target, array):
        """
        从右下角开始遍历
        """
        row_num = len(array)
        col_num = len(array[0])
        i = 0
        j = col_num - 1
        while i <= row_num-1 and j >= 0:
            if target < array[i][j]:
                j -= 1
            elif target > array[i][j]:
                i += 1
            else:
                return True
        return False
