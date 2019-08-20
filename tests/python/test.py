# -*- coding: utf-8 -*-
def noRepeatChar(_str):
    char_set = set()
    for c in _str:
        if c in char_set:
            return False
        else:
            char_set.add(c)
    return True

def longestSubString(_str):
    n = len(_str)
    if n <= 1:
        return n
    max_len = 1
    for i in range(n):
        for j in range(i+1, n):
            _str_tmp = _str[i: j+1]
            if noRepeatChar(_str_tmp) == True:
                max_len = max(j-i+1, max_len)
    return max_len

import sys
# line = sys.stdin.readline()     
print(longestSubString("pwwkew"))