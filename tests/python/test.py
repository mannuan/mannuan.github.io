"""
最优打字策略
时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
在英文的输入中，我们经常会遇到大小写切换的问题，频繁切换大小写会增加我们的按键次数，也会降低我们的打字效率。

众所周知，切换大小写有两种方式，一种是按下“caps locks”，也就是大写锁定键，这样一来，之后的输入模式都会被切换。另一种是同时按下shift和需要打印的字母，可以临时切换大小写(算作按下两个键)。

已知初始状态下，打字模式是小写，现在给出需要打印的字符串(区分大小写)，请你计算出最少需按键多少次才能打印出来。

输入
输入第一行仅包含一个正整数n，表示字符串的长度(1<=n<=1000000)。

输入第二行包含一个长度为n的字符串，仅包含大小写字母。

输出
输出仅包含一个正整数，即最少的按键次数。


样例输入
6
AaAAAA
样例输出
8
"""
# -*- coding: utf-8 -*-
import sys
# n = int(sys.stdin.readline().strip()) 
# _str = sys.stdin.readline().strip()
_str = "aAAa"
num_upper = 0
num_lower = 0
num_click = 0
# print(ord("A"), ord("Z"))
for i, s in enumerate(_str):
    if ord(s) >= 65 and ord(s) <=90: # 大写
        if num_lower > 0:
            num_click += num_lower
        num_lower = 0
        num_upper += 1
    else:
        if num_upper > 0:
            if num_upper == 1:
                num_click += (num_upper+1)
            elif num_upper > 1:
                num_click += (num_upper+2)
        num_upper = 0
        num_lower += 1
if num_lower > 0:
    num_click += num_lower
if num_upper > 0:
    num_click += num_upper+1
print(num_click)
