# -*- coding: utf-8 -*-
from pyquery import PyQuery as pq
with open('./NTU_Irony_Corpus.txt', "r") as f:
  str = f.read().encode("utf-8")  #设置"utf-8"编码，这一步很重要
p = pq(str)
for i in p('message').items():
    print(i.text())