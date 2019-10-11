# -*- coding:utf-8 -*-

"""
题目描述
输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
(注意: 在返回值的list中，数组长度大的数组靠前)
"""

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def FindPath(self, root, expectNumber):
        # write code here
        # 如果根节点为空
        if not root:
            return []
        stack = [root]
        seen = []
        result = []
        while stack:
            # print("stack: ", [i.val for i in stack])
            # print("result:", result, "\n")
            root = stack[-1]
            # 叶子节点
            if not root.left and not root.right:
                if sum([i.val for i in stack]) == expectNumber:
                    if result:
                        if len(stack) > len(result[-1]):
                            tmp = result.pop()
                            result.append([i.val for i in stack])
                            result.append(tmp)
                        else:
                            result.append([i.val for i in stack]) 
                    else:
                        result.append([i.val for i in stack])
                stack.pop()
            else:
                if root.left:
                    if root.left.val not in seen:
                        stack.append(root.left)
                        seen.append(root.left.val)
                        continue
                if root.right:
                    if root.right.val not in seen:
                        stack.append(root.right)
                        seen.append(root.right.val)
                        continue
                # 如果节点的左右两个子节点都已经遍历
                stack.pop()
        return result


if __name__ == "__main__":
    def createBiTreebyPreOrder(root, arr):
        if arr:
            root.left = TreeNode(arr.pop(0))
            if arr:
                root.right = TreeNode(arr.pop(0))
            if root.left:
                createBiTreebyPreOrder(root.left, arr)
            if root.right:
                createBiTreebyPreOrder(root.right, arr)

    root = TreeNode(0)
    createBiTreebyPreOrder(root, [i for i in range(1,10)])
    # print(root.left.left.left.left.left.val)
    s = Solution()
    print(s.FindPath(root, 2))
        
    