# -*- coding: utf-8 -*-
from pyquery import PyQuery as pq
import json
htmlname = "/Users/wujunlei/VscodeProjects/我的github技术博客/blog_markdown/static/html/contents.html"
jsonname = "/Users/wujunlei/VscodeProjects/我的github技术博客/blog_markdown/static/skill-content/public/contents.json"
jsonname1 = "/Users/wujunlei/VscodeProjects/我的github技术博客/blog_markdown/static/skill-content/dist/contents.json"
p = pq(filename=htmlname, parser="html")
contents = [{"contents": []}]
children = [i for i in p('body').children() if i.tag == "ul"][0]
def createContents(_contents, element):
    if element.tag == "ul":
        for e in element.getchildren():
            createContents(_contents[-1]['contents'], e)
    elif element.tag == "li":
        if element.get('index') and element.get('title'):
            obj = {"contents": []}
            obj["index"] = element.get('index').strip().replace(" ", "_")
            obj["title"] = element.get('title').strip().replace(" ", "_")
            if element.get('blog_id'):
                obj["blog_id"] = element.get('blog_id').strip()
            if element.get('blog_section'):
                obj["blog_section"] = element.get('blog_section').strip().lower()
            _contents.append(obj)
        else:
            _contents.append({'contents': []})

createContents(contents, children)

with open(jsonname, "w+") as f:
    f.write(json.dumps(contents, ensure_ascii=False))

with open(jsonname1, "w+") as f:
    f.write(json.dumps(contents, ensure_ascii=False))
