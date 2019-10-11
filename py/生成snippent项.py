# -*- coding: utf-8 -*-
import re
def generateSnippetItem():
    with open("/Users/wujunlei/VscodeProjects/我的github技术博客/blog_markdown/static/py/code.txt", "r") as f:
        snippet = f.read().replace("\n\n", "\n").replace("\"", "\\\"")
    snippet = ",\n".join(["\""+i+"\"" for i in snippet.split("\n") if i.strip()]).strip()
    with open("/Users/wujunlei/VscodeProjects/我的github技术博客/blog_markdown/static/py/snippet.txt", "w+") as f:
        f.write(snippet)


if __name__ == "__main__":
    generateSnippetItem()