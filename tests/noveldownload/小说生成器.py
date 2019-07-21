# -*- coding: utf-8 -*-
from pymongo import MongoClient
import re
client = MongoClient("mongodb://lab421:lab421_1@120.55.59.187:27817")
db = client.novel
file_content = ""
for i in db['novel01'].find({}).sort([("index", 1)]):
    index = i["index"]
    title = i["title"]
    chapter_name = "第%s章 %s" % (index, title)
    print(chapter_name)
    content = i["content"].strip().replace("&1t;i>&1t;/i>", "")
    content = content.replace("请记住本书首发域名：www.biqukan.com。笔趣阁手机版阅读网址：wap.biqukan.com", "").replace("chaptererror();", "").replace("想和更多志同道合的人一起聊《重生之老子是皇帝》，“热度网文　或者　”　与更多书友一起聊喜欢的书", "").replace("推荐都市大神老施新书:", "")
    content = re.sub("\(https://www\.biqukan\.com/53_53739/[\d]{8}\.html\)", "", content)
    content = re.sub("[\n]{2,}", "\n", content)
    file_content += "%s\n%s\n" % (chapter_name, content)
# print(file_content)
with open("./CSZLZSHD.txt", "w+") as f:
    f.write(file_content)
    