"""
姓名排序
时间限制：C/C++语言 3000MS；其他语言 5000MS
内存限制：C/C++语言 131072KB；其他语言 655360KB
题目描述：
马上就要开学了，教务处的老师拿到了新生的名单，现在他需要根据考生的姓名录入一个拼音版的新名单。

老师录入时，需要输入姓和名(例如：ZHANG SAN，字母均为大写，姓名以空格隔开)，并且要将这些人按一定规则排序。

排序的方式如下：

首先，按照该姓的出现次数排序，即：姓出现次数多的人先排序

其次，若两个人的姓出现的次数一样多（或者是同一个姓），按照原名单的顺序。

输入
输入包括多行，每一行两个字符串，代表一个人的姓和名

输出
输出排序后的名单


样例输入
ZHANG SAN
LI SI
WANG WU
WANG LIU
WANG QI
ZHANG WU
LI WU
样例输出
WANG WU
WANG LIU
WANG QI
ZHANG SAN
LI SI
ZHANG WU
LI WU

提示
范围 
输入只包含大写字母，最多10000行，每行最多50个字符
"""
from collections import Counter
arr = [["ZHANG", "SAN"], ["LI", "SI"], ["WANG", "WU"], ["WANG", "LIU"], ["WANG", "QI"], ["ZHANG", "WU"], ["LI", "WU"]]
arr2 = [i[0] for i in arr]
c = Counter(arr2)
arr3 = []
for i in c:
    arr3.append([i, c[i]])
arr3.sort(key=lambda x: x[1], reverse=True)
arr4 = [i[1] for i in arr3]
c = Counter(arr4)
for i in range(len(arr3)):
    arr3[i].append(c[arr3[i][1]])
# print(arr3)
while arr3:
    
