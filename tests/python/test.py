def sortHeap(arr, reverse=False):
    """
    :reverse True为降序,False为升序
    默认是升序排列
    把数组当成一个层次遍历的二叉树，
    堆排序这里默认为大顶堆
    """
    if len(arr) < 2:
        return
    _len = len(arr)
    _build_heap(arr, _len, reverse)
    for i in range(_len-1, 0, -1): # _len-1~1
        arr[i], arr[0] = arr[0], arr[i] # 交换
        _heapify(arr, i, 0, reverse)
def _build_heap(arr, n, reverse):
    """
    父节点的公式: parent = (i-1)//2
    i表示父节点的下标(从0开始)
    """
    parent_i = (n-2)//2 # i从0开始，所以减1，又因为父节点的公式
    for i in range(parent_i, -1, -1): # parent_i~0
        _heapify(arr, n, i, reverse)
def _heapify(arr, n, i, reverse):
    """
    :n 表示截取的数组的长度，从1开始
    :i 表示数组中的下标
    左节点的计算公式: c1 = 2i+1
    右节点的计算公式: c2 = 2i+2
    """
    stack = [i]
    while stack:
        i = stack.pop()
        left_i = 2*i + 1 # i的左边子节点的下标
        right_i = 2*i + 2 # i的右边子节点的下标
        side_i = i # 在一个堆中最大值的下标
        # 如果reverse为False,升序排序，即极大值或极小值的下标i小于孩子节点的下标
        Condition = lambda child_i, x: arr[side_i] < arr[child_i] if not x else arr[side_i] > arr[child_i]
        if left_i<n and Condition(left_i, reverse):
            side_i = left_i
        if right_i<n and Condition(right_i, reverse):
            side_i = right_i
        if side_i != i: # 如果最大值的下标不是当前节点的下标
            arr[side_i], arr[i] = arr[i], arr[side_i] # 交换
            stack.append(side_i)