# -*- coding:utf-8 -*-

"""
题目描述
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下4 X 4矩阵： 
1   2   3   4 
5   6   7   8 
9   10  11  12 
13  14  15  16 
则依次打印出数字
1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
确定圈数：
x = min(n_row,n_col)
f(1) = 1
f(2) = 1
f(3) = 2
f(4) = 2
f(5) = 3
f(6) = 3
规律：(min-1)//2+1
"""

class Solution:
    # matrix类型为二维列表，需要返回列表
    def printMatrix(self, matrix):
        # write code here
        n_row = len(matrix)
        n_col = len(matrix[0])
        arr = []
        for i in range((min(n_row, n_col)-1)//2+1):
            # 上面行
            for j in range(i, n_col-i):
                arr.append(matrix[i][j])
            # 如果起始行号大于终止行号
            if i+1 > n_row-i-1:
                break
            for j in range(i+1, n_row-i):
                arr.append(matrix[j][n_col-i-1])
            # 如果起始列号小于终止列号
            if n_col-1-i-1 < i:
                break
            for j in range(-(n_col-1-i-1), -i+1):
                arr.append(matrix[n_row-i-1][-j])
            # 如果起始行号小于终止行号
            if n_row-1-i-1 < i+1:
                break
            for j in range(-(n_row-1-i-1), -(i+1)+1):
                arr.append(matrix[-j][i])
        return arr

    
if __name__ == "__main__":
    s = Solution()
    print(s.printMatrix([[1,2,3,4,5,6]]))