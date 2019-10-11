# -*- coding: utf-8 -*-
from pymongo import MongoClient
import re
client = MongoClient("mongodb://lab421:lab421_1@120.55.59.187:27817")
db = client.novel
file_content = ""
for i in db['novel02'].find({}).sort([("index", 1)]):
    index = i["index"]
    title = i["title"]
    chapter_name = "第%s章 %s" % (index, title)
    print(chapter_name)
    content = i["content"].strip()
    content = content.replace("记住本站网址，Ｗｗｗ．biquxu．Ｃｏｍ，方便下次阅读，或且百度输入“ biquxu.com ”，就能进入本站", "")
    content = re.sub("[\n]{2,}", "\n", content)
    file_content += "%s\n%s\n" % (chapter_name, content)
# print(file_content)
with open("./SWXZYC.txt", "w+") as f:
    f.write(file_content)
    