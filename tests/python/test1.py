"""

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
    
