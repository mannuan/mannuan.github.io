# -*- coding:utf-8 -*-

"""
题目描述
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
"""

class Solution:
    def VerifySquenceOfBST(self, sequence):
        # write code here
        if len(sequence) == 0:
            return False
        if len(sequence) == 1:
            return True
        root = sequence.pop()
        left = []
        # 遇到大于root的数字立刻跳出循环
        for index, i in enumerate(sequence):
            if i > root:
                break
            left.append(i)
        right = sequence[index:]
        if len(right) <= 1:
            return True
        for i in right:
            if i < root:
                return False
        self.VerifySquenceOfBST(left)
        self.VerifySquenceOfBST(right)
        return True


if __name__ == "__main__":
    s = Solution()
    print(s.VerifySquenceOfBST([5,7,6,9,11,10,8]))

        