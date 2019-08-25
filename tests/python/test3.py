import random
def sortQuick(arr, reverse=False):
    """
    :reverse True为降序,False为升序
    默认是升序排列
    """
    if len(arr) < 2:
        return
    # 为了减少外部的参数的输入，因此在嵌套一层函数
    _sort_between(arr, 0, len(arr)-1, reverse) # 两个子数组之间排序
def _sort_between(arr, low, high, reverse):
    stack = [(low, high)]
    while stack:
        (low, high) = stack.pop()
        pivot = random.randint(low, high)
        arr[pivot], arr[low] = arr[low], arr[pivot]
        m = _partition(arr, low, high, reverse)
        if low < m: # 如果子数组的长度大于1
            stack.append((low, m))
        if m+1 < high: # 如果子数组的长度大于1
            stack.append((m+1, high))
def _partition(arr, low, high, reverse):
    # 理解这个排序需要更加抽象的思维
    # pivot: 数组数值的中心，j表示前半部分数组的边界，i表示后面数组的边界
    # 主要关注交换i和j的值
    pivot, j = arr[low], low
    for i in range(low+1, high+1):
        # 如果reverse为False，那么如果没有判断的数组的后面存在小于pivot的数，则交换，否则反之
        condition = (lambda x:arr[i] < pivot if not x else arr[i] > pivot)(reverse)
        if condition:
            j += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[low], arr[j] = arr[j], arr[low]
    return j