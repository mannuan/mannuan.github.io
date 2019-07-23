# -*- coding:utf-8 -*-

"""
题目描述
把一个数组最开始的若干个元素搬到数组的末尾，
我们称之为数组的旋转。 
输入一个非减排序的数组的一个旋转，
输出旋转数组的最小元素。 
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
"""

class Solution:
    """
    非递减数组包含两种情况：
    1. 数组中的元素均匀变化
    2. 数组中的元素递增
    """
    def minNumberInOrder(self, rotateArray, left, right):
        minNum = rotateArray[left]
        for i in rotateArray[left+1:right+1]:
            if rotateArray[i] < minNum:
                minNum = rotateArray[i]
        return minNum

    def minNumberInRotateArray(self, rotateArray):
        if not len(rotateArray):
            return 0
        left = 0 # 左指针
        right = len(rotateArray) - 1 # 右指针
        if rotateArray[left] < rotateArray[right]:
            return rotateArray[left]
        while True:
            if right - left == 1:
                mid = right
                break
            mid = left + (right - left) // 2
            if rotateArray[left] == rotateArray[mid] and rotateArray[mid] == rotateArray[right]:
                return self.minNumberInOrder(rotateArray, left, right)
            if rotateArray[mid] >= rotateArray[left]:
                left = mid
            elif rotateArray[mid] <= rotateArray[right]:
                right = mid
        return rotateArray[mid]

            
if __name__ == "__main__":
    s = Solution()
    print(s.minNumberInRotateArray([1,0,1,1,1]))

            



        
        