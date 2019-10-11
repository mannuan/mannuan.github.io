# -*- coding:utf-8 -*-

"""
题目描述
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
"""

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    # 返回从上到下每个节点值列表，例：[1,2,3]
    def PrintFromTopToBottom(self, root):
        if not root:
            return []
        arr = []
        queue = [root]
        while queue:
            node = queue.pop(0)
            arr.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return arr


def levelCreateBiTree(root, arr):
    queue = [root]
    while arr:
        node = queue.pop(0)
        node.left = TreeNode(arr.pop(0))
        queue.append(node.left)
        if arr:
            node.right = TreeNode(arr.pop(0))
            queue.append(node.right)
        else:
            break
        

def printPreOrderBitree(root, arr):
    if root:
        arr.append(root.val)
        printPreOrderBitree(root.left, arr)
        printPreOrderBitree(root.right, arr)
    

if __name__ == "__main__":
    arr = [i for i in range(1,100)]
    root = TreeNode(arr.pop(0))
    levelCreateBiTree(root, arr)
    # printPreOrderBitree(root, arr)
    # print(arr)
    s = Solution()
    print(s.PrintFromTopToBottom(root))